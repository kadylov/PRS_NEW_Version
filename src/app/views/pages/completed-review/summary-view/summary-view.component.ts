import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Location} from '@angular/common';
import {LayoutUtilsService, MessageType} from '../../../../core/_base/crud';
import {WorkService} from '../../../../core/work/service/work.service';

@Component({
	selector: 'kt-summary',
	templateUrl: './summary-view.component.html',
	styleUrls: ['./summary-view.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush

})
// Admin Summary view. It is the page where admin does a final decision for works
// whether to accept the work or reject after reviewing generated lead's reviewers summaries
// This component is activated when admin clicks on one of the 'view' buttons on "all works page"
// or when admin is in Completed Reviews" tab and wants to view a summary of one the works from the list
export class SummaryViewComponent implements OnInit, OnDestroy {

	summary: any;

	subscription: Subscription;

	constructor(
		private router: Router,
		private location: Location,
		private ref: ChangeDetectorRef,
		private layoutUtilsService: LayoutUtilsService,
		private workService: WorkService
	) {
	}

	ngOnInit(): void {

		// get the summary stored from the session storage. Sample content of summary
		// that is loaded from the session and converted in json format is below:
		// WID: "1"
		// Title: "New Metrics for...",
		// URL: "https://www.researchgate.net"
		// AuthorName: "TP Novak",
		// Status: "scored"
		// Scorecards: [{
		// 				ReviewerID: "70",
		// 				ReviewerName:
		// 				"reviewer6 name",
		// 				Credential: "Ph.D",
		// 				RoleId: "1",
		// 				RoleType: "Reviewer",
		//				Scores[{RubricID: "1", Score: "5"},{RubricID: "2", Score: "5"}...],
		//				canScore: "0"
		// 				},
		//
		// 				{
		// 				ReviewerID: "72",
		// 				ReviewerName: "reviewer21 name",
		// 				Credential: "Ph.D", RoleId: "1",
		// 				RoleType: "Reviewer"
		//				Scores[{RubricID: "1", Score: "5"},{RubricID: "2", Score: "5"}...],
		//				canScore: "0"
		this.summary = JSON.parse(sessionStorage.getItem('summary'));
	}


	ngOnDestroy(): void {
		sessionStorage.removeItem('summary');
	}


	// this function is called when admin clicks on one of the buttons (accept or reject)
	// for making final decision or when admin clicks on main menu button
	onClick(decision: string = '') {

		// get work id from the summary
		const wid = this.summary['WID'];


		// if admin clicks on of the decision making buttons, then
		// update work status from 'scored' to 'completed' and then redirect
		// to the Completed Review tab
		// else redirect to the previous page
		if (decision !== '') {
			this.subscription = this.workService.updateWorkStatusByID(wid, decision).subscribe(
				() => {

					// display confirmation message
					this.layoutUtilsService.showActionNotification("Work has been completed successfully", MessageType.Update, 4000, false, false);

				},
				error => console.log(error)
			);
			this.router.navigateByUrl('/admin/completed-review');

		//	redirect to the previous menu if 'main menu' button is clicked
		} else {
			this.location.back();
		}

	}
}
