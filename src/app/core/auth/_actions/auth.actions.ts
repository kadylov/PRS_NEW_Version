import { Action } from '@ngrx/store';
import {User1} from '../_models/user1.model';

export enum AuthActionTypes {
    Login = '[Login] Action',
    Logout = '[Logout] Action',
    UserRequested = '[Request User] Action',
    UserLoaded = '[Load User] Auth API'
}

export class Login implements Action {
    readonly type = AuthActionTypes.Login;
    constructor(public username:string,
					public password:string) { }
}

export class Logout implements Action {
    readonly type = AuthActionTypes.Logout;
}

export class UserRequested implements Action {
	readonly type = AuthActionTypes.UserRequested;
}

export class UserLoaded implements Action {
	readonly type = AuthActionTypes.UserLoaded;

	constructor(public user:User1) {
	}
}

export type AuthActions = Login | Logout | UserRequested | UserLoaded;
