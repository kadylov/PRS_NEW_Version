import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AdminService} from '../../../core/admin/_services/admin.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
	selector: 'kt-completed-review',
	templateUrl: './completed-review.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush

})
export class CompletedReviewComponent implements OnInit {

	scoredWorks$: Observable<any>;

	constructor(
		private router:Router,
		private ref:ChangeDetectorRef,
		private adminService: AdminService,
	) {
	}

	ngOnInit() {

		/*
		* fetch reviewers' scorecards for the assigned works
		* */
		this.scoredWorks$ = this.adminService.getReviewersScorecard();
		this.ref.markForCheck();
	}


	onClick(summary: any) {
		sessionStorage.setItem('summary', JSON.stringify(summary));
		this.router.navigateByUrl('/admin/summary');
	}

	getCumulativeScore(scoredWork: any) {
		const scorecards = scoredWork['Scorecards'];

		let totalScores = scorecards.map(review=>{
			return review['Scores'].reduce((sum, rubric) =>  {

				return sum + parseFloat(rubric.Score)}, 0);
		});

		let cumScore = totalScores.reduce((acc, score) => acc + score, 0);
		return cumScore;

	}
}
