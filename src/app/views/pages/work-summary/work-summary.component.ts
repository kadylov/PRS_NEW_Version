import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, OnDestroy, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {AdminService} from '../../../core/admin/_services/admin.service';
import {Subscription} from 'rxjs';


@Component({
	selector: 'work-summary',
	templateUrl: './work-summary.component.html',
	styleUrls: ['./work-summary.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkSummaryComponent implements OnInit, OnDestroy {

	overallScore: number = 0;
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
		if (!this.scorecards) {
			this.adminReview = JSON.parse(sessionStorage.getItem('summary'));
		}

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

	getTotalScore(scorecard: any) {
		const scoredRubrics = scorecard['Scores'];
		const totalScore = scoredRubrics.reduce((acc, rubric) => acc + parseFloat(rubric.Score), 0);

		this.overallScore += totalScore;
		this.numbReviewers++;


		return totalScore;
	}

}
