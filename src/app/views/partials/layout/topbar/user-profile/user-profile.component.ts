// Angular
import { Component, Input, OnInit } from '@angular/core';
import {User1} from '../../../../../core/auth/_models/user1.model';
import {NavigationEnd, Router} from '@angular/router';

@Component({
	selector: 'kt-user-profile',
	templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
	_user: User1;
	pic: './assets/media/users/300_25.jpg';
	private returnUrl: string;



	@Input() avatar: boolean = true;
	@Input() greeting: boolean = true;
	@Input() badge: boolean;
	@Input() icon: boolean;


	/**
	 * Component constructor
	 *
	 * @param store: Store<AppState>
	 */
	constructor(private router: Router) {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				this.returnUrl = event.url;
			}
		});
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {
		this._user = JSON.parse(sessionStorage.getItem('user'));
	}

	/**
	 * Log out
	 */
	logout() {
		localStorage.clear();
		sessionStorage.clear();
		this.router.navigateByUrl('/auth/login');

	}
}
