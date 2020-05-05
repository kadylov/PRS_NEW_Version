// Angular
import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
// RxJS
import {filter, map, mergeMap, tap, withLatestFrom} from 'rxjs/operators';
import {defer, Observable, of} from 'rxjs';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action, select, Store} from '@ngrx/store';
// Auth actions
import {AuthActionTypes, Login, Logout, UserLoaded} from '../_actions/auth.actions';
import {AuthService} from '../_services/index';
import {AppState} from '../../reducers';
import {environment} from '../../../../environments/environment';
import {
	AssignmentActionTypes,
	AssignmentHistoryLoaded,
	AssignmentLoaded,
	AssignmentRequested
} from '../../reviewer/_actions/assignment.actions';
import {User1} from '../_models/user1.model';

@Injectable()
export class AuthEffects {


	@Effect()
	login$ = this.actions$.pipe(
		ofType<Login>(AuthActionTypes.Login),
		mergeMap(
			(user) =>
				this.auth.login(user.username, user.password)
					.pipe(
						map((user: User1) => {
								this.store.dispatch(new UserLoaded(user));
							}
						)
						// localStorage.setItem(environment.authTokenKey, action.payload.authToken);
						// this.store.dispatch(new UserRequested());
					)
		)
	);

	@Effect({dispatch: false})
	logout$ = this.actions$.pipe(
		ofType<Logout>(AuthActionTypes.Logout),
		tap(() => {
			localStorage.removeItem(environment.authTokenKey);
			this.router.navigate(['/auth/login'], {queryParams: {returnUrl: this.returnUrl}});
		})
	);


	private returnUrl: string;

	constructor(private actions$: Actions,
				private router: Router,
				private auth: AuthService,
				private store: Store<AppState>) {

		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				this.returnUrl = event.url;
			}
		});
	}
}
