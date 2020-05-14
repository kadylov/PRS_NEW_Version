import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSlideToggleChange, MatSort, MatTableDataSource} from '@angular/material';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {AdminService} from '../../../core/admin/_services/admin.service';
import {WorkService} from '../../../core/work/service/work.service';
import {Work} from '../../../core/work/model/work';


@Component({
	selector: 'kt-all-works',
	templateUrl: './all-works.component.html',
	styleUrls: ['./all-works.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllWorksComponent implements OnInit, OnDestroy {

	displayedColumns = ['WID', 'Title', 'AuthorName', 'Status', 'ViewSummary', 'Publish'];
	dataSource: MatTableDataSource<Work>;
	works: any = [];

	subscription: Subscription[] = [];

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	@ViewChild(MatSort, {static: true}) sort: MatSort;


	tagList = [];
	selectable: boolean = false;
	removable: boolean = false;

	constructor(
		private router: Router,
		private adminService: AdminService,
		private workService: WorkService) {
		this.dataSource = new MatTableDataSource();

	}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;

		this.loadWorks();
	}

	ngOnDestroy(): void {
		if (this.subscription.length > 0) {
			this.subscription.forEach(r => r.unsubscribe());
		}

	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}


	loadWorks() {
		const subsc = this.workService.getAllWorks()
			.subscribe(
				res => {
					this.dataSource.data = res;
					this.dataSource.sort = this.sort;
					this.dataSource.paginator = this.paginator;
					// console.log("AAAA");
					// console.log(this.dataSource.data);
				},
				error => {
					console.log('There was an error while retrieving Posts !!!' + error);
				});

		this.subscription.push(subsc);
	}

	slideChanged(event: MatSlideToggleChange, work: any) {
		let checked: number;

		// console.log('BEfore ', checkedUser.isActive);

		if (event.checked) {
			checked = 1;
		} else {
			checked = 0;
		}

		const subsc = this.workService.publishWork(work.WID, checked)
			.subscribe(res => {

				},
				error => {
					console.log('Error ', error);
				});

		this.subscription.push(subsc);
	}

	viewSummary(summary: Work) {


		if (summary.Status === 'denied') {
			const subsc = this.adminService.getAdminReview(summary.WID).subscribe(
				res => {

					let pre_review = {
						...summary,
						AdminID: res[0].AdminID,
						AdminName: res[0].AName,
						DateReviewed: res[0].DateReviewed,
						Decision: res[0].Decision,
						RejectNote: res[0].RejectNote
					};

					// store admin's pre_review(e.g. AdminID, WorkID, Title, DateReviewed, Decision, RejectNote)
					sessionStorage.setItem('summary', JSON.stringify(pre_review));
					this.router.navigateByUrl('/admin/summary');

				}
			);
			this.subscription.push(subsc);

		} else {
			const subsc = this.adminService.getReviewersScorecard(summary.WID.toString()).subscribe(
				res => {
					console.log(res);

					sessionStorage.setItem('summary', JSON.stringify(res[0]));
					this.router.navigateByUrl('/admin/summary');

				}
			);

		}
	}


	/**
	 * Returens item CSS Class Name by status
	 *
	 * @param status: number
	 */
	getItemCssClassByStatus(status: string = ''): string {

		/*  The classes for text colors are: .text-muted, .text-primary,
		.text-success, .text-info, .text-warning, .text-danger,
		.text-secondary, .text-white, .text-dark,and .text-light: */

		switch (status) {

			case 'rejected':
				return 'text-danger';

			case 'assigned':
			case 'reviewed':
				return 'text-primary';

			case 'accepted':
			case 'completed':
				return 'text-success';


			default:
				return '';


		}

	}


	showBtnToolTip(status: any) {
		if (status == 'assigned' || status == 'reviewed') {
			return 'Work Summary has not been generated yet';
		} else {
			return 'View Summary';
		}
	}

	showStatusToolTip(status: any) {
		switch (status) {
			case 'rejected':
				return 'Admin rejected work';

			case 'assigned':
				return 'Assigned reviewers are still reviewing the work';

			case 'reviewed':
				return 'Assigned lead reviewer has not generated summary yet';

			case 'accepted':
				return 'Admin accepted work';
			case 'scored':
				return 'Assigned reviewers reviewed and scored the work';

			case 'denied':
				return 'Work did not pass admin\'s pre-review';

			default:
				return '';
		}
	}

	showSliderToolTip(work: Work) {

		if (work.Publish == 1) {
			return 'Work is published';
		} else if (work.Status == 'denied' || work.Status == 'rejected') {
			return 'Rejected work cannot be published';
		} else if (work.Status == 'assigned') {
			return 'Work has not been scored yet';
		} else if (work.Status == 'reviewed') {
			return 'Work cannot be published until without a review summary';
		} else {
			return 'Unpublished work';
		}

	}


	private prepare_pre_review(work: Work) {

	}
}
