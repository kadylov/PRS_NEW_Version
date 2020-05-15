import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {AdminService} from '../../../core/admin/_services/admin.service';
import {ReviewerService} from '../../../core/reviewer/_services/reviewer.service';
import {User1} from '../../../core/auth/_models/user1.model';
import {LayoutUtilsService, MessageType} from '../../../core/_base/crud';
import {global} from '@angular/compiler/src/util';

@Component({
		selector: 'kt-summary',
		templateUrl: './summary.component.html',
		styleUrls: ['./summary.component.scss'],
	}
)
// Lead Reviewer's Summary
export class SummaryComponent implements OnInit {

	summary: any;
	subscription: Subscription[] = [];


	overallScore: number = 0;
	scorecards: any;

	collectedComments: string;

	// for storing number of reviewers for calculating overall score
	// of the work
	numbReviewers: number = 0;

	constructor(
		private router: Router,
		private location: Location,
		private ref: ChangeDetectorRef,
		private layoutUtilsService: LayoutUtilsService,
		private adminService: AdminService,
		private reviewerService: ReviewerService
	) {
	}

	ngOnInit(): void {

		// gets reviewers scorecards and review summary from the server
		const subsc = this.adminService.getReviewersScorecard('1', 'reviewed').subscribe(
			res => {
				this.summary = res[0];
				this.scorecards = res[0]['Scorecards'];
				this.getAllComments(this.summary['WID']);

				this.ref.markForCheck();

			}
		);

		this.subscription.push(subsc);


	}


	ngOnDestroy(): void {
		if (this.subscription.length > 0) {
			this.subscription.forEach(sub => sub.unsubscribe());
		}
	}


	// this function is called when user clicks on "Generate" button
	// it collects the reviewers comments from their scorecards and then generates a review summary
	// and submit it to the server with status

	// also this function is called when user clicks on cancel button
	// it will take the user to the previous page
	onClick(decision: string = '') {

		if (decision == '') {

			this.location.back();

		} else {

			const wid = this.summary['WID'];
			const leadReviewerID = this.getUserId();
			let summary = {
				WorkID: wid,
				LeadID: leadReviewerID,
				WorkFinalScore: this.overallScore / this.numbReviewers,
				SummaryText: this.collectedComments
			};


			// submit review summary to the server
			this.subscription.push(this.reviewerService.sendSummary(summary).subscribe(
				() => {
					this.summary = undefined;
					this.ref.markForCheck();
					this.layoutUtilsService.showActionNotification('Summary has been generated and submitted successfully', MessageType.Update, 4000, false, false);
				},

				error => console.log(error)
			));

		}
	}

	// get all comments made by reviewers from their scorecards
	getAllComments(workID) {
		this.subscription.push(this.reviewerService.getAllReviewersComments(workID).
		subscribe(
			res => this.collectedComments = res
		));

	}

	getTotalScore(scorecard: any) {
		const scoredRubrics = scorecard['Scores'];
		const totalScore = scoredRubrics.reduce((acc, rubric) => acc + parseFloat(rubric.Score), 0);

		this.overallScore += totalScore;
		this.numbReviewers++;


		return totalScore;
	}


	// this function is called when reviewer clicks on view button on one of the works
	// displayed on the table
	// fetch scored scorecard from the server and store the server's respond to session storage
	// and then redirect to scorecard page (e.g. in-progress)
	viewScorecard(workID: number, reviewerID: number) {
		console.log(workID, reviewerID);

		const subsc = this.reviewerService.getScorecard(workID, reviewerID).subscribe(
			scorecard => {
				sessionStorage.setItem('scorecard', JSON.stringify(scorecard));
				this.router.navigateByUrl('reviewer/in-progress');
			}
		);
		this.subscription.push(subsc);

	}

	// get user id of the current user
	getUserId() {
		let user: User1 = JSON.parse(sessionStorage.getItem('user'));
		return user.id;
	}
}
