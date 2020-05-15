// Angular
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'kt-user-management',
	templateUrl: './user-management.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserManagementComponent implements OnInit {

	/**
	 * Component constructor
	 *
	 * @param store: Store<AppState>
	 * @param router: Router
	 */
	constructor(private router: Router) {
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
	}
}
