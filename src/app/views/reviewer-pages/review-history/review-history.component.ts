import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ReviewHistory} from '../../../core/reviewer/_models/review-history.model';
import {ReviewerService} from '../../../core/reviewer/_services/reviewer.service';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {ReviewHistoryRequested} from '../../../core/reviewer/_actions/review-history.actions';
import * as fromReviewer from '../../../core/reviewer/_reducers/';
import {Router} from '@angular/router';

@Component({
	selector: 'kt-review-history',
	templateUrl: './review-history.component.html',
	styleUrls: ['./review-history.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
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

	// send review history load request to the reducer
	ngOnInit() {
		this.store.dispatch(new ReviewHistoryRequested());
		this.loadReviewHistory();
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach(sub => sub.unsubscribe());
	}



	loadReviewHistory(firstLoad: boolean = false) {

		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;

		// get review history from the server via the state control and load the history
		// to table for view
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

	// this function is called when reviewer clicks on view button on one of the works
	// displayed on the table
	// fetch scored scorecard from the server and store the server's respond to session storage
	// and then redirect to scorecard page (e.g. in-progress)
	viewScorecard(work: any) {
		const subsc = this.reviewerService.getScorecard(work.WID, work.RID).subscribe(
			scorecard=>{
				sessionStorage.setItem('scorecard', JSON.stringify(scorecard));
				this.router.navigateByUrl('reviewer/in-progress');
			}
		);
	}
}
