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
		selector: 'assigned-reviewers-table',
		templateUrl: './assigned-reviewers-table.component.html',
		styleUrls: ['assigned-reviewers-table.component.scss'],
	}
)

// This component is for displaying in table format the selected reviewers from the dialog box
export class AssignedReviewersTable implements OnInit, DoCheck, OnDestroy {
	dataSource: MatTableDataSource<Reviewer>;
	displayedColumns = ['id', 'Reviewer', 'Role', 'DueDate', 'Status', 'Action'];

	@Input() reviewers: Reviewer[];
	@Input() workID: number;
	@Input() isForIncomingWork: boolean = false;

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

	/**
	 * Returns reviewer assignment status by checking due date with today's date
	 *
	 * @param reviewDue: string
	 */
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

		if (reviewDue < this.currentDate) {
			return 'danger';
		} else if (reviewDue >= this.currentDate) {
			return 'success';
		} else {
			return '';
		}
	}


	// switches reviewer whose assignment is over due with a new reviewer
	// recieves the selected reviewer from the table and
	// pass the reviewer to ReviewerToAssignComponent dialog box before opening the dialog up
	// this function is called when user is on review-in-progress' component
	switchUser(reviewerToSwap: any) {

		let oldReviewer = reviewerToSwap;
		const dialogRef = this.dialog.open(ReviewerToAssignComponent, {
			width: '1131px',
			data: {
				'reviewers': [this.reviewers],
				'workID': this.workID
			},
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result == undefined || result.data == 'close') {
				return;
			} else {

				// first, deactivate reviewer whose assignment is overdue
				// and then swap the deactivated reviewer with the selected reviewer from the dialog box
				this.deactivateUserByIdFromAssignment(reviewerToSwap.ReviewerID, this.workID);
				const newAssignedReviewer = {
					ReviewerID: result.assignment.reviewer.ReviewerID,
					ReviewerName: result.assignment.reviewer.ReviewerName,
					Role: result.assignment.reviewer.Role,
					DueDate: result.assignment.dueDate
				};

				// create a new assignment object for the newly selectected reviewer from dialog box
				const assignment = {
					adminID: this.getAdminId(),
					reviewerID: newAssignedReviewer.ReviewerID,
					workID: this.workID,
					dueDate: result.assignment.dueDate,
					dateAssigned: this.currentDate
				};

				// submit new assignment for the newly assigned reviewer to the server
				// and then display a confirmation message to the screen
				this.subscriptions.push(this.adminService.assignReviewer(assignment).subscribe(
					() => {
						this.updateReviewerTable(oldReviewer, newAssignedReviewer);
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


	private updateReviewerTable(reviewer, newReviewer) {

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


	// this function is used on incoming works component wherer user can swap recently selected
	// from the dialog box with another reviewer after clicking on "Switch reviewer" button and
	// select the new reviewer
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
				this.updateReviewerTable(reviewerToSwap, newAssignedReviewer);

			}

		});
	}
}
