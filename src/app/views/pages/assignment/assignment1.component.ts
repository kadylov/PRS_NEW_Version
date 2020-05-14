import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Reviewer, ReviewInProgressModel} from '../../../core/admin/_models/review-in-progress.model';
import {AdminService} from '../../../core/admin/_services/admin.service';
import {ReviewerToAssignComponent} from '../reviewersToAssign/reviewer-to-assign.component';
import {DatePipe} from '@angular/common';
import {MatDialog} from '@angular/material';
import {LayoutUtilsService, MessageType} from '../../../core/_base/crud';


@Component({
	selector: 'kt-assignment1',
	templateUrl: './assignment1.component.html',
	styleUrls: ['./assignment1.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
// Admin's Assignment page, where admin see a list of unassigned works
// and assigns 5 or more reviewers for each unassigned work
export class AssignmentComponent1 implements OnInit, OnDestroy {

	reviewInProgress: ReviewInProgressModel[] = [];
	currentDate: string;

	subscriptions: Subscription[] = [];


	constructor(
		private datePipe: DatePipe,
		public dialog: MatDialog,
		private ref: ChangeDetectorRef,
		private layoutUtilsService: LayoutUtilsService,
		private adminService: AdminService,
	) {

		// receive a list of unassigned works from the server and store
		// the server response to reviewInProgress object
		let subsc = this.adminService.getUnassignedWorks().subscribe(
			res => {
				if (res) {
					this.reviewInProgress = res;
					this.ref.markForCheck();
				}

			}
		);
	}

	ngOnInit(): void {
		this.currentDate = this.datePipe.transform(new Date(Date.now()), 'yyyy-MM-dd');
	}

	ngOnDestroy(): void {
		if (this.subscriptions.length > 0) {
			this.subscriptions.forEach(s => s.unsubscribe());
		}
	}


	// opens up a dialog box with a list of reviewers to be assigned
	addReviewer(revInProgress: any) {

		/* sample content of revInProgress parameter

			AuthorEmail: "chen@nytimes.com"
			AuthorName: "Julie Chen"
			DateSubmission: "2020-05-04"
			DateWritten: "2020-05-04"
			IsRetired: "no"
			Publish: "0"
			Status: "admitted"
			Title: "Costco is limiting how many steaks shoppers can buy."
			URL: "https://www.nytimes.com/1232"
			WID: "65",
			Reviewers: []
		 */

		const dialogRef = this.dialog.open(ReviewerToAssignComponent, {
			width: '1131px',


			// if the user selected reviewer from the dialog box first time
			// then 'reviewers' parameter will be passed as undefined
			// else revInProgress.Reviewers will be passed to the dialog box
			data: {
				'reviewers': revInProgress.Reviewers,
				'workID': revInProgress.WID,
			},
		});

		// receives a selected reviewer along with the due date for the assignment from the dialog box (ReviewerToAssignComponent)
		dialogRef.afterClosed().subscribe(result => {

			if (result == undefined || result.data == 'close') {
				return;

			} else {

				// prepare assigned reviewer object
				const newAssignedReviewer = {
					ReviewerID: result.assignment.reviewer.ReviewerID,
					ReviewerName: result.assignment.reviewer.ReviewerName,
					Role: result.assignment.reviewer.Role,
					DueDate: result.assignment.dueDate
				};

				// add recently selected reviewer from the dialog box to the
				// 'reviewInProgress' Reviewer list
				this.addReviewerToList(revInProgress, newAssignedReviewer);

			}

		});
	}

	private getAdminId() {
		const user = JSON.parse(sessionStorage.getItem('user'));
		return user.id;
	}



	// adds the new reviewer received from the dialog box to 'reviewInProgress' Reviewer list
	addReviewerToList(work: ReviewInProgressModel, reviewer: Reviewer) {
		this.reviewInProgress.map((rip: ReviewInProgressModel) => {
			if (rip.WID === work.WID) {

				if (rip.Reviewers == undefined) {
					rip.Reviewers = [];
				}

				// add all previosly added reviewers and the new reviewer to the list
				rip.Reviewers = [...rip.Reviewers, reviewer];
				this.ref.markForCheck();
				return;
			}
		});
	}


	updateReviewerList(reviewers: Reviewer[], review: ReviewInProgressModel) {
		review.Reviewers = reviewers;
		this.ref.markForCheck();

	}

	// submit selected reviewers and their due date for the work to the server
	submitChanges(review: ReviewInProgressModel) {

		// create assignment object
		const assignment = {
			AdminID: this.getAdminId(),

			// a list of selected reviewers and their due dates
			ReviewersAndDueDate: review.Reviewers,

			// work that needs to be assigned to
			WorkID: review.WID,
		};


		this.subscriptions.push(this.adminService.assignGroupReviewers(assignment).subscribe(
			res => {

				this.displayConfirmationMessage('Reviewers have been assigned successfully.');
			},
			err => {
				console.log(err);
			}
		));

		this.hideAssignedWork(review);
	}

	hideAssignedWork(work: ReviewInProgressModel) {
		this.reviewInProgress = this.reviewInProgress.filter(r => r.WID != work.WID);
		this.ref.markForCheck();
	}

	private displayConfirmationMessage(message: string) {
		this.layoutUtilsService.showActionNotification(message, MessageType.Create, 5000, true, false);
	}

}
