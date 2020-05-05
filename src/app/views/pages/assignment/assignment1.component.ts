import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
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
export class AssignmentComponent1 implements OnInit, OnDestroy {


	reviewInProgress: ReviewInProgressModel[] = [];
	currentDate: string;

	selectedReviewer: Reviewer = null;

	subscriptions: Subscription[] = [];


	constructor(
		private datePipe: DatePipe,
		public dialog: MatDialog,
		private ref: ChangeDetectorRef,
		private layoutUtilsService: LayoutUtilsService,
		private adminService: AdminService) {

		let subsc = this.adminService.getUnassignedWorks().subscribe(
			res => {
				if (res) {
					this.reviewInProgress = res;
					this.ref.markForCheck();
					// console.log(this.reviewInProgress);
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


	addReviewer(revInProgress: any) {

		let reviewerID = 0;
		if (this.selectedReviewer != null) {

			reviewerID = this.selectedReviewer.ReviewerID;
		}

		const dialogRef = this.dialog.open(ReviewerToAssignComponent, {
			width: '1131px',
			data: {
				'reviewers': revInProgress.Reviewers,
				'workID': revInProgress.WID,
			},
		});

		dialogRef.afterClosed().subscribe(result => {

			if (result.data != undefined || result.data == 'close') {
				return;
			} else {

				const newAssignedReviewer = {
					ReviewerID: result.assignment.reviewer.ReviewerID,
					ReviewerName: result.assignment.reviewer.ReviewerName,
					Role: result.assignment.reviewer.Role,
					DueDate: result.assignment.dueDate
				};

				const assignment = {
					adminID: this.getAdminId(),
					reviewerID: newAssignedReviewer.ReviewerID,
					workID: revInProgress.WID,
					dueDate: result.assignment.dueDate,
					dateAssigned: this.currentDate
				};

				this.addReviewerToList(revInProgress, newAssignedReviewer);

				// this.subscriptions.push(this.adminService.assignReviewer(assignment).subscribe(
				// 	res => {},
				// 	error => {
				// 		console.log('Error! Reviewer has not been added.');
				// 	}
				// ));

			}

		});
	}

	private getAdminId() {
		const user = JSON.parse(sessionStorage.getItem('user'));

		return user.id;
	}

	addReviewerToList(work: ReviewInProgressModel, reviewer: Reviewer) {
		this.reviewInProgress.map((rip: ReviewInProgressModel) => {
			if (rip.WID === work.WID) {

				if (rip.Reviewers == undefined) {
					rip.Reviewers = [];
				}
				rip.Reviewers = [...rip.Reviewers, reviewer];
				this.ref.markForCheck();

				this.selectedReviewer = reviewer;

				console.log(this.reviewInProgress);
				return;
			}
		});
	}


	combineArrays(lhs: string[], rhs: string[]) {
		let reviewers = {};
		lhs.forEach((key, i) => reviewers[key] = rhs[i]);
		return reviewers;
	}

	updateReviewerList(reviewers: Reviewer[], review: ReviewInProgressModel) {

		review.Reviewers = reviewers;
		this.ref.markForCheck();

	}

	submitChanges(review: ReviewInProgressModel) {

		const assignment = {
			AdminID: this.getAdminId(),
			Reviewers: review.Reviewers,
			WorkID: review.WID,
		};

		this.subscriptions.push(this.adminService.assignGroupReviewers(assignment).subscribe(
			res => {
				this.displayConfirmationMessage('Reviewers have been assigned successfully.');
			}
		));

		this.hideAssignedWork(review);
	}

	hideAssignedWork(work: ReviewInProgressModel) {
		this.reviewInProgress = this.reviewInProgress.filter(r => r.WID != work.WID);
		console.log(this.reviewInProgress);
		this.ref.markForCheck();
	}

	private displayConfirmationMessage(message: string) {
		this.layoutUtilsService.showActionNotification(message, MessageType.Create, 5000, true, false);
	}
}
