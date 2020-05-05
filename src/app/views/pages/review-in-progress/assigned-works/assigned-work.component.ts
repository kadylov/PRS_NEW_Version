import {MatDialog, MatTableDataSource} from '@angular/material';
import {Reviewer} from '../../../../core/admin/_models/review-in-progress.model';
import {
	ChangeDetectorRef,
	Component,
	DoCheck,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ReviewerToAssignComponent} from '../../reviewersToAssign/reviewer-to-assign.component';
import {Subscription} from 'rxjs';
import {AdminService} from '../../../../core/admin/_services/admin.service';
import {LayoutUtilsService, MessageType} from '../../../../core/_base/crud';


@Component({
		selector: 'assigned-work-table',
		templateUrl: './assigned-work.component.html',
		styleUrls: ['assigned-work.component.scss'],
	}
)
export class AssignedListComponent implements OnInit, DoCheck, OnDestroy {
	dataSource: MatTableDataSource<Reviewer>;
	displayedColumns = ['id', 'Reviewer', 'Role', 'DueDate', 'Status', 'Action'];

	@Input() reviewers: Reviewer[];
	@Input() workID: number;
	@Input() dataSource1: MatTableDataSource<Reviewer>;
	@Input() showButton: boolean = false;

	@Output() updatedReviewerList = new EventEmitter<Reviewer[]>();

	currentDate: string;
	subscriptions: Subscription[] = [];

	constructor(private datePipe: DatePipe,
				public dialog: MatDialog,
				private ref: ChangeDetectorRef,
				private adminService: AdminService,
				private layoutUtilsService: LayoutUtilsService,
	) {
		this.currentDate = datePipe.transform(new Date(Date.now()), 'yyyy-MM-dd');

	}


	ngOnInit(): void {
		this.dataSource = new MatTableDataSource<Reviewer>(this.reviewers);
	}

	ngDoCheck(): void {
		if (this.reviewers != undefined) {
			this.dataSource = new MatTableDataSource<Reviewer>(this.reviewers);
		}
	}

	ngOnDestroy(): void {
		if (this.subscriptions.length > 0) {
			this.subscriptions.forEach(sub => sub.unsubscribe());
		}
	}

	getItemStatusString(reviewDue: string = ''): string {
		if (reviewDue < this.currentDate) {
			return 'overdue';
		} else if (reviewDue >= this.currentDate) {
			return 'due';
		} else {
			return '';
		}
	}

	/**
	 * Returens item CSS Class Name by status
	 *
	 * @param status: number
	 */
	getItemCssClassByStatus(reviewDue: string = ''): string {

		// console.log(this.currentDate);

		// due date = 17 curr date =22
		if (reviewDue < this.currentDate) {
			return 'danger';
		} else if (reviewDue >= this.currentDate) {
			return 'success';
		} else {
			return '';
		}
	}


	switchUser(reviewer: any) {
		const reviewerToSwap = reviewer;

		const dialogRef = this.dialog.open(ReviewerToAssignComponent, {
			width: '1131px',
			data: {
				'reviewers': [reviewer],
				'workID': this.workID
			},
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result.data == 'close') {
				return;
			} else {

				// first, deactivate reviewer whose assignment is overdue
				// and then swap the deactivated reviewer with selected reviewer from the dialogbox
				this.deactivateUserByIdFromAssignment(reviewerToSwap.ReviewerID, this.workID);

				const newAssignedReviewer = {
					ReviewerID: result.assignment.reviewer.ReviewerID,
					ReviewerName: result.assignment.reviewer.ReviewerName,
					Role: result.assignment.reviewer.Role,
					DueDate: result.assignment.dueDate
				};

				const assignment = {
					adminID: this.getAdminId(),
					reviewerID: newAssignedReviewer.ReviewerID,
					workID: this.workID,
					dueDate: result.assignment.dueDate,
					dateAssigned: this.currentDate
				};

				this.subscriptions.push(this.adminService.assignReviewer(assignment).subscribe(
					res => {
						this.updateRowData(reviewerToSwap, newAssignedReviewer);
						this.displayConfirmationMessage();
					}
				));
			}
		});
	}


	private deactivateUserByIdFromAssignment(reviewerId: number, workId: number) {
		this.subscriptions.push(this.adminService.deactivateUserFromAssignment(reviewerId, workId).subscribe());
	}

	private getAdminId() {
		const user = JSON.parse(sessionStorage.getItem('user'));

		return user.id;
	}


	private updateRowData(reviewer, newReviewer) {

		this.reviewers = this.reviewers.filter(r =>
			r.ReviewerID !== reviewer.ReviewerID
		);

		this.reviewers.push(newReviewer);
		this.dataSource.data = this.reviewers;

		this.updatedReviewerList.emit(this.reviewers);
	}


	private displayConfirmationMessage() {
		const message = `The reviewer has been swapped successfully.`;
		this.layoutUtilsService.showActionNotification(message, MessageType.Create, 5000, true, false);
	}


	reassignReviewer(reviewer: any) {
		const reviewerToSwap = reviewer;

		const dialogRef = this.dialog.open(ReviewerToAssignComponent, {
			width: '1131px',
			data: {
				'reviewers': this.reviewers,
				'workID': this.workID
			},
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result.data == 'close') {
				return;
			} else {

				const newAssignedReviewer = {
					ReviewerID: result.assignment.reviewer.ReviewerID,
					ReviewerName: result.assignment.reviewer.ReviewerName,
					Role: result.assignment.reviewer.Role,
					DueDate: result.assignment.dueDate
				};
				this.updateRowData(reviewerToSwap, newAssignedReviewer);

			}

		});
	}
}
