import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, OnDestroy, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';


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

	constructor(
		private ref: ChangeDetectorRef,
	) {
	}

	ngOnInit(): void {
		if (!this.scorecards) {
			this.adminReview = JSON.parse(sessionStorage.getItem('summary'));
		}
	}

	ngOnDestroy(): void {
	}

	getTotalScore(scorecard: any) {
		const scoredRubrics = scorecard['Scores'];
		const totalScore = scoredRubrics.reduce((acc, rubric) => acc + parseFloat(rubric.Score), 0);
		this.overallScore += totalScore;
		return totalScore;
	}

}
