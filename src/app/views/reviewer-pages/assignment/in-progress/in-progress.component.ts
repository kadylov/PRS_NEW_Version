import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ReviewerService} from '../../../../core/reviewer/_services/reviewer.service';
import {Subscription} from 'rxjs';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {User1} from '../../../../core/auth/_models/user1.model';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatIconRegistry} from '@angular/material';
import {DiscussionComponent} from '../../discussion/discussion.component';


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

	// for dispalying loading animation while work url is loading in iframe
	loading: boolean = true;

	// flag for setting material review container to full screen
	isFullscreen: boolean = false;
	subscription: Subscription[] = [];
	assignment:any = null;
	safeUrl: SafeUrl;						// for url sanitazing prior loading to iframe
	canScore: boolean = true;				// flag for setting scorecard to reading or writting mode


	workID: number;							// will be used for loading messages in discussion dialog


	constructor(
		private sanitizer: DomSanitizer,
		private router: Router,
		private location: Location,
		private modalService: NgbModal,
		iconRegistry: MatIconRegistry,
		public dialog: MatDialog,
		private reviewerService: ReviewerService
	) {

		// load icon for the floating button
		iconRegistry.addSvgIcon('chat1',
			sanitizer.bypassSecurityTrustResourceUrl('./assets/media/icons/svg/Communication/Chat_1.svg'));
	}

	ngOnInit() {
		this.assignment = JSON.parse(sessionStorage.getItem('assignment'));

		// checks whether assignment is for scoring or for reading
		if (this.assignment) {
			this.workID = this.assignment['WorkID'];

			this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.assignment.URL);
		} else {
			this.loadScoredAssigment();
		}

	}

	ngOnDestroy() {

		sessionStorage.removeItem('assignment');

		if (this.subscription.length > 0) {
			this.subscription.forEach(r => r.unsubscribe());
		}
	}

	// submits user data from scorecard to the server
	// the function is called when user clicks on submit button
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


	// calculate cumulative score
	// it is called when user slides one of the sliders on the scorecard
	changeSlider() {
		this.cValue = this.q1Value + this.q2Value + this.q3Value + this.q4Value + this.q5Value + this.q6Value + this.q7Value + this.q8Value + this.q9Value + this.q10Value + this.q11Value + this.q12Value;
	}

	// returns id of the reviewer
	getCurrentUserID() {
		const user: User1 = JSON.parse(sessionStorage.getItem('user'));
		return user.id;
	}

	// loads previously scored scorecard in read mode
	// it is called when reviewer wants review one of his/her scored works
	// in review history component or in assignment history component
	loadScoredAssigment() {
		const scorecard = JSON.parse(sessionStorage.getItem('scorecard'));
		this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(scorecard.URL);

		this.workID = scorecard['WorkID'];

		const scores = scorecard['Scorecard'];
		if (scores) {
			this.q1Value = +scores['1'];
			this.q2Value = +scores['2'];
			this.q3Value = +scores['3'];
			this.q4Value = +scores['4'];
			this.q5Value = +scores['5'];
			this.q6Value = +scores['6'];
			this.q7Value = +scores['7'];
			this.q8Value = +scores['8'];
			this.q9Value = +scores['9'];
			this.q10Value = +scores['10'];
			this.q11Value = +scores['11'];
			this.q12Value = +scores['12'];
			this.cValue = this.q1Value + this.q2Value + this.q3Value + this.q4Value + this.q5Value + this.q6Value + this.q7Value + this.q8Value + this.q9Value + this.q10Value + this.q11Value + this.q12Value;
		}

		this.canScore = false;
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

	returnToPrevPage() {
		sessionStorage.removeItem('scorecard');
		this.location.back();
	}


	// opens up discussion dialog box
	// it is called when reviewer clicks on the floating button in progress.component.html
	// it passes workID for loading reviewers messages that related to the work and canScore status
	// that indicate whether reviewer can send any message via textfield
	openDiscussionDialogBox(){
		const dialogRef = this.dialog.open(DiscussionComponent, {
			panelClass: 'discussion-dialog-container',
			data: {
				'workID': this.workID,
				'canWrite': this.canScore
			},
		});
	}

}

