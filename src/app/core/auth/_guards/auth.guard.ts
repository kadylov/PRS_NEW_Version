// Angular
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
// RxJS
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
// NGRX
import {select, Store} from '@ngrx/store';
// Auth reducers and selectors
import {User1} from '../_models/user1.model';

@Injectable()

export class AuthGuard implements CanActivate {
	constructor(
		private router: Router) {
	}

	canActivate(route: ActivatedRouteSnapshot,
				state: RouterStateSnapshot) {

		let user: User1 = JSON.parse(sessionStorage.getItem('user'));
		if (user) {
			if (route.data.roles && route.data.roles.indexOf(user.roleType) === -1) {

				sessionStorage.removeItem('user');
				this.router.navigate(['auth/login']);
				return false;
			}
		} else {
			this.router.navigate(['/home/public']);
			return false;
		}

		return true;


	}
}
