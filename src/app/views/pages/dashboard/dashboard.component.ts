// Angular
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {WorkService} from '../../../core/work/service/work.service';
import {Work} from '../../../core/work/model/work';

@Component({
	selector: 'kt-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
	title: string = 'The Highest Scored Works';

	works$: Observable<Work[]>;

	constructor(private workService: WorkService,
				private router:Router
	) {

	}

	// get incoming works from the server
	ngOnInit() {
		this.works$ = this.workService.getIncomingWorks();
	}

	ngOnDestroy(): void {
	}

	// this function is called when admin clicks on "Review" button on the dashboard
	// it receives selected work for pre-review
	// store it in the session storage for PreReviewComponent
	// and then takes the admin to PreReviewComponent page
	onClick(w: Work) {
		sessionStorage.setItem('workForAdmReview', JSON.stringify(w));
		this.router.navigateByUrl('/admin/review');
	}
}
