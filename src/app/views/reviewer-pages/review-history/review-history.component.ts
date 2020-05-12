import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ReviewHistory} from '../../../core/reviewer/_models/review-history.model';
import {ReviewerService} from '../../../core/reviewer/_services/reviewer.service';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {ReviewHistoryRequested} from '../../../core/reviewer/_actions/review-history.actions';
import * as fromReviewer from '../../../core/reviewer/_reducers/';
import {Router} from '@angular/router';

@Component({
	selector: 'kt-review-history',
	templateUrl: './review-history.component.html',
	styleUrls: ['./review-history.component.scss']
})
export class ReviewHistoryComponent implements OnInit, OnDestroy {

	dataSource: MatTableDataSource<ReviewHistory>;
	displayedColumns = ['id', 'Title', 'DateReviewed', 'Score', 'Action'];

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	@ViewChild(MatSort, {static: true}) sort: MatSort;

	// Subscriptions
	private subscriptions: Subscription[] = [];

	constructor(
		private store: Store<fromReviewer.ReviewerState>,
		private router:Router,
		private reviewerService: ReviewerService
	) {
		this.dataSource = new MatTableDataSource<ReviewHistory>();
	}

	ngOnInit() {
		this.store.dispatch(new ReviewHistoryRequested());
		this.loadItems();
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(sub => sub.unsubscribe());
	}


	/**
	 * Load items
	 *
	 * @param firstLoad: boolean
	 */
	loadItems(firstLoad: boolean = false) {

		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;


		this.store.select(fromReviewer.getAllHistoryLoaded).subscribe(isLoaded => {
			if (isLoaded) {
				let subc$ = this.store.select(fromReviewer.getAllHistory)
				.subscribe(res => {
					this.dataSource.data = res;
				});

				this.subscriptions.push(subc$);
			}
		});
	}

	viewScorecard(work: any) {
		const subsc = this.reviewerService.getScorecard(work.WID, work.RID).subscribe(
			scorecard=>{
				sessionStorage.setItem('scorecard', JSON.stringify(scorecard));
				this.router.navigateByUrl('reviewer/in-progress');
			}
		);
	}
}
