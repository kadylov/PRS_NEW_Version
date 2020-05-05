// Angular
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Work} from '../../author/model/work';
import {DataTableWorkService} from '../../../core/_base/layout';
import {Router} from '@angular/router';
import {WorkService} from '../../author/service/work.service';

@Component({
	selector: 'kt-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
	title: string = 'The Highest Scored Works';

	works$: Observable<Work[]>;


	tagList = [];
	selectable: boolean = false;
	removable: boolean = false;

	constructor(private workService: WorkService,
				private router:Router
	) {

	}

	ngOnInit() {
		this.works$ = this.workService.getIncomingWorks();
	}

	ngOnDestroy(): void {
	}


	onClick(w: Work) {
		sessionStorage.setItem('workForAdmReview', JSON.stringify(w));
		this.router.navigateByUrl('/admin/review');
	}
}
