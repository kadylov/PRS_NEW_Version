import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {SafeUrl} from '@angular/platform-browser';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {WorkService} from '../../author/service/work.service';
import {AdminService} from '../../../core/admin/_services/admin.service';
import {ReviewerService} from '../../../core/reviewer/_services/reviewer.service';
import {User1} from '../../../core/auth/_models/user1.model';

@Component({
		selector: 'kt-summary',
		templateUrl: './summary.component.html',
		styleUrls: ['./summary.component.scss'],
		changeDetection: ChangeDetectionStrategy.OnPush

	}
)
// Lead Reviewer Summary
export class SummaryComponent implements OnInit{

	isFullscreen: boolean = false;
	summary: any;

	subscription: Subscription[] =[];



	overallScore: number = 0;
	scorecards: any;

	adminReview: any;
	numbReviewers:number=0;
	threshold: number =0;

	constructor(
		// private sanitizer: DomSanitizer,
		private router: Router,
		private location: Location,
		private ref: ChangeDetectorRef,
		private adminService: AdminService,
		private reviewerService: ReviewerService
	) {
	}

	ngOnInit(): void {

		const subsc = this.adminService.getReviewersScorecard('1', 'reviewed').subscribe(
			res=>{
				console.log(res);

				this.summary = res[0];
				this.scorecards = res[0]['Scorecards'];
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


	onClick(decision: string = '') {

		if (decision == 'generate') {


		}else {
			// return to previous menu
			this.location.back();
		}

		const wid = this.summary['WID'];
		const leadReviewerID = this.getUserId();

		let summary={
			WorkID: wid,
			LeadID:leadReviewerID,
			WorkFinalScore: this.overallScore/this.numbReviewers,
			SummaryText: ''
		}

		if (decision !== '') {
			this.subscription.push(this.reviewerService.sendSummary(summary).subscribe(
				() => {
				},

				error => console.log(error)
			));

			// this.router.navigateByUrl('/admin/completed-review');
		} else {
			// this.location.back();
		}



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
	viewScorecard(workID: number, reviewerID:number) {
		console.log(workID, reviewerID)

		const subsc = this.reviewerService.getScorecard(workID, reviewerID).subscribe(
			scorecard=>{
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
