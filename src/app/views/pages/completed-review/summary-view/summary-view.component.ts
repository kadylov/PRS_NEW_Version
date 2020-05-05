import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {SafeUrl} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {WorkService} from '../../../author/service/work.service';
import {Observable, of, Subscription} from 'rxjs';
import {Location} from '@angular/common';

@Component({
	selector: 'kt-summary',
	templateUrl: './summary-view.component.html',
	styleUrls: ['./summary-view.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush

})
export class SummaryViewComponent implements OnInit, OnDestroy {

	isFullscreen: boolean = false;
	safeUrl: SafeUrl;

	summary: any;

	subscription: Subscription;

	constructor(
		// private sanitizer: DomSanitizer,
		private router: Router,
		private location: Location,
		private ref: ChangeDetectorRef,
		private workService: WorkService
	) {
	}

	ngOnInit(): void {
		// this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.workSummary.URL);
		this.summary= JSON.parse(sessionStorage.getItem('summary'));

	}


	ngOnDestroy(): void {
		sessionStorage.removeItem('summary');
	}


	onClick(decision: string = '') {

		const wid = this.summary['WID'];

		if (decision !== '') {
			this.subscription = this.workService.updateWorkStatusByID(wid, decision).subscribe(
				() => {
				},

				error => console.log(error)
			);

			this.router.navigateByUrl('/admin/completed-review');
		} else {
			this.location.back();
		}

	}
}
