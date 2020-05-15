import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, OnDestroy, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Subscription} from 'rxjs';
import {AdminService} from '../../../../core/admin/_services/admin.service';


@Component({
	selector: 'work-summary',
	templateUrl: './work-summary.component.html',
	styleUrls: ['./work-summary.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

// work summary table for displaying a list of reviewers and
// the individual Scores from their scorecards
// or for displaying admin's review (e.g. name, credential, ... rejected note) for a rejected work
// This component is used in summary-view.component.html
export class WorkSummaryComponent implements OnInit, OnDestroy {

	overallScore: number = 0;

	// scorecard passed from summary-view.component.html
	@Input() scorecards: any;

	adminReview: any;
	numbReviewers:number=0;
	threshold: number =0;

	subscription:Subscription;

	constructor(
		private ref: ChangeDetectorRef,
		private adminService:AdminService
	) {
	}

	ngOnInit(): void {

		// if scorecard is not passed from summary-view.component.html,
		// then load admin review for rejected work
		if (!this.scorecards) {
			this.adminReview = JSON.parse(sessionStorage.getItem('summary'));
		}

		// get threshold value from the server for displaying it on the right lower corner of the page
		this.subscription = this.adminService.getThreshold().subscribe(
			res=>{
				if (res) {
					this.threshold = res;
					this.ref.markForCheck();
				}
			}
		)
	}

	ngOnDestroy(): void {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}

	// calculate total scores from all reviewers scorecards
	getTotalScore(scorecard: any) {
		const scoredRubrics = scorecard['Scores'];
		const totalScore = scoredRubrics.reduce((acc, rubric) => acc + parseFloat(rubric.Score), 0);

		this.overallScore += totalScore;
		this.numbReviewers++;


		return totalScore;
	}

}
