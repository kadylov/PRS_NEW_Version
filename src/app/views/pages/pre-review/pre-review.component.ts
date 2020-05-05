import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Work} from '../../author/model/work';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {FormControl, Validators} from '@angular/forms';
import {AdminService} from '../../../core/admin/_services/admin.service';
import {DatePipe} from '@angular/common';
import {error} from '@angular/compiler/src/util';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {Router} from '@angular/router';
import {EmailService} from '../../../core/email-notification/_services/email.service';
import {Subscription} from 'rxjs';
import {Email} from '../../../core/email-notification/_models/email.model';
import {User1} from '../../../core/auth/_models/user1.model';

@Component({
	selector: 'pre-review',
	templateUrl: './pre-review.component.html',
	styleUrls: ['./pre-review.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class PreReviewComponent implements OnInit, OnDestroy {
	work: Work;
	admin: User1;

	safeUrl: SafeUrl;
	loading: boolean = true;
	isFullscreen: boolean = false;

	subscribtion: Subscription;

	decision: FormControl = new FormControl('', Validators.required);
	rejectNote: FormControl = new FormControl('', Validators.required);

	constructor(private sanitizer: DomSanitizer,
				private datepipe: DatePipe,
				private snackBar: MatSnackBar,
				private router: Router,
				private emailService: EmailService,
				private adminService: AdminService) {

		this.work = JSON.parse(sessionStorage.getItem('workForAdmReview'));
		this.admin = JSON.parse(sessionStorage.getItem('user'));

	}

	ngOnInit(): void {

		this.work.URL = this.work.URL.toLowerCase();

		if (!this.work.URL.startsWith('https://') && !this.work.URL.startsWith('http://')) {
			this.work.URL = 'http://' + this.work.URL;
		}

		this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.work.URL);
	}

	ngOnDestroy(): void {
		if (this.subscribtion) {
			this.subscribtion.unsubscribe();
		}

		sessionStorage.removeItem('workForAdmReview');
	}

	submit() {
		if (this.decision.invalid) {
			this.decision.markAllAsTouched();
			return;
		}

		if (this.rejectNote.invalid && this.decision.value == 'denied') {
			this.rejectNote.markAllAsTouched();
			return;
		}


		let rejectNote = this.rejectNote.value;

		if (this.decision.value != 'denied') {
			rejectNote = '';
		}


		let preReview = this.generatePreReview(rejectNote);
		if (preReview) {
			this.subscribtion = this.adminService.submitPreReview(preReview).subscribe(
				() => {
					this.displaySnackBar('Your review has been submitted successfully.');
					this.emailService.sendWorkStatusEmail(this.createWorkStatusEmail()).subscribe();
					this.clearForm();

					this.router.navigateByUrl('admin/assignment');
				},
				error => {
					this.displaySnackBar('Error, unable to submit your review');
				}
			);
		}
	}

	private generatePreReview(rejectNote: string) {
		if (this.admin == undefined) {
			return;
		}

		let date = this.datepipe.transform(new Date(Date.now()), 'yyyy-MM-dd');
		return {
			AdminID: this.admin.id,
			WorkID: this.work.WID,
			DateReviewed: date,
			Decision: this.decision.value,
			RejectNote: rejectNote
		};
	}

	private displaySnackBar(message: string) {
		let config = new MatSnackBarConfig();
		config.duration = 5000;
		config.panelClass = ['d-flex', 'justify-content-center', 'snackbar2'];
		this.snackBar.open(message, '', config);
	}

	public clearForm() {
		this.decision.clearValidators();
		this.decision.updateValueAndValidity();

		if (this.rejectNote.value) {
			this.rejectNote.clearValidators();
			this.rejectNote.updateValueAndValidity();
		}
	}

	private createWorkStatusEmail(): Email {
		let decicion: string = 'has been admitted for further review';

		if (this.decision.value == 'denied') {
			decicion = 'has not been accepted. Please try again to submit the work when it is improved. <br><br>' +
				'The reason for rejection is ' + this.rejectNote.value;
		}

		let msg: string = 'Hi, ' + this.work.AuthorName + ' <br><br> This message is to notify you that' +
			' your work ' + decicion;

		return {
			senderName: 'no-reply',
			senderEmail: this.admin.email,
			recepientName: this.work.AuthorName,
			recepientEmail: this.work.AuthorEmail,
			subject: 'Work Status Notification',
			message: msg,
			canReply: 1
		};
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


	isControlHasError(controlName: string, validationType: string): boolean {
		let control: FormControl = null;

		switch (controlName) {
			case 'decision':
				control = this.decision;
				break;
			case 'rejectNote':
				control = this.rejectNote;
				break;
		}
		if (!control) {
			return false;
		}

		const result = control.hasError(validationType) && (this.decision.dirty || this.decision.touched);
		return result;
	}
}
