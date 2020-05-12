import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ReviewHistory} from '../../../core/reviewer/_models/review-history.model';
import {Subscription} from 'rxjs';
import * as fromReviewer from '../../../core/reviewer/_reducers';
import {Store} from '@ngrx/store';
import {AssignmentHistoryRequested, AssignmentRequested} from '../../../core/reviewer/_actions/assignment.actions';
import {User1} from '../../../core/auth/_models/user1.model';
import {Assignment} from '../../../core/reviewer/_models/assignment.model';
import {Router} from '@angular/router';
import {ReviewerService} from '../../../core/reviewer/_services/reviewer.service';

@Component({
	selector: 'kt-assignment-history-work',
	templateUrl: './assignment-history.component.html',
})
export class AssignmentHistoryComponent implements OnInit, OnDestroy {

	dataSource: MatTableDataSource<Assignment>;
	displayedColumns = ['id', 'Title', 'DateAssigned', 'DueDate', 'Action'];

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	@ViewChild(MatSort, {static: true}) sort: MatSort;


	// Subscriptions
	private subscriptions: Subscription[] = [];

	constructor(
		private store: Store<fromReviewer.ReviewerState>,
		private router:Router,
		private reviewerService: ReviewerService
	) {
		this.dataSource = new MatTableDataSource<Assignment>();

	}

	ngOnInit() {
		this.store.dispatch(new AssignmentHistoryRequested(this.getUserId()));
		this.loadAssignmentHistory();
	}

	ngOnDestroy(): void {
		if (this.subscriptions.length > 0) {
			this.subscriptions.forEach(sub => sub.unsubscribe());
		}
	}

	loadAssignmentHistory() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;

		let subc$ = this.store.select(fromReviewer.getAssignmentHistoryLoaded).subscribe(isLoaded => {
			if (isLoaded) {
				let loadSubc$ = this.store.select(fromReviewer.getAssignmentHistory)
					.subscribe(res => {
						this.dataSource.data = res;
					});
				this.subscriptions.push(loadSubc$);
			}
		});
		this.subscriptions.push(subc$);

	}

	getUserId() {
		let user: User1 = JSON.parse(sessionStorage.getItem('user'));
		return user.id;
	}

	viewScorecard(assignment: any) {
		const subsc = this.reviewerService.getScorecard(assignment.WorkID, assignment.ReviewerID).subscribe(
			scorecard=>{

				// if the server responds back with the reviewer's filled scorecard,
				// then store it to the session and redirect to scorecard page (e.g. in-progress page)
				// else the reviewer did not review the work on time, so store the assignment to session
				if (scorecard) {
					sessionStorage.setItem('scorecard', JSON.stringify(scorecard));
					this.router.navigateByUrl('reviewer/in-progress');
				}

				else{
					sessionStorage.setItem('scorecard', JSON.stringify(assignment));
					this.router.navigateByUrl('reviewer/in-progress');

				}

			}
		);
	}
}
