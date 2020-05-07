import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ReviewerService} from '../../../../core/reviewer/_services/reviewer.service';
import {Subscription} from 'rxjs';
import {Work} from '../../../author/model/work';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {User1} from '../../../../core/auth/_models/user1.model';


@Component({
	selector: 'kt-in-progress',
	templateUrl: './in-progress.component.html',
	styleUrls: ['./in-progress.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush

})

export class InProgressComponent implements OnInit, OnDestroy {

	q1Value = 0;
	q2Value = 0;
	q3Value = 0;
	q4Value = 0;
	q5Value = 0;
	q6Value = 0;
	q7Value = 0;
	q8Value = 0;
	q9Value = 0;
	q10Value = 0;
	q11Value = 0;
	q12Value = 0;
	cValue = 0;

	loading: boolean = true;
	isFullscreen: boolean = false;
	subscription: Subscription[] = [];
	assignment = null;
	safeUrl: SafeUrl;

	constructor(
		private sanitizer: DomSanitizer,
		private router: Router,
		private reviewerService: ReviewerService
	) {
	}

	ngOnInit() {
		this.assignment = JSON.parse(sessionStorage.getItem('assignment'));
		this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.assignment.URL);

	}

	ngOnDestroy() {

		sessionStorage.removeItem('assignment');

		if (this.subscription.length > 0) {
			this.subscription.forEach(r => r.unsubscribe());
		}
	}

	onSumbit() {
		const subsc = this.reviewerService.sendScores(this.assignment.WorkID, this.getCurrentUserID(),
			this.q1Value, this.q2Value, this.q3Value, this.q4Value,
			this.q5Value, this.q6Value, this.q7Value, this.q8Value,
			this.q9Value, this.q10Value, this.q11Value, this.q12Value,
			this.cValue)
			.subscribe(res => {
					this.router.navigateByUrl('reviewer/dashboard');
				}
			);

		this.subscription.push(subsc);
	}


	changeSlider() {
		this.cValue = this.q1Value + this.q2Value + this.q3Value + this.q4Value + this.q5Value + this.q6Value + this.q7Value + this.q8Value + this.q9Value + this.q10Value + this.q11Value + this.q12Value;
	}

	getCurrentUserID() {
		const user: User1 = JSON.parse(sessionStorage.getItem('user'));
		return user.id;
	}


	exitFromFullScreen() {
		this.isFullscreen = false;

		if (document.exitFullscreen) {
			document.exitFullscreen();
		}
	}

	openInFullScreen() {
		this.isFullscreen = true;
		var elem = document.getElementById('myDiv');
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		}
	}

}

