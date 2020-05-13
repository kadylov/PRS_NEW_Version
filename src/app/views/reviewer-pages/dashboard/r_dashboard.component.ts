import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
	selector: 'kt-reviewer-dashboard',
	templateUrl: './r_dashboard.component.html',
	styleUrls: ['./r_dashboard.component.scss'],
	changeDetection:ChangeDetectionStrategy.OnPush
})
export class R_DashboardComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}
}
