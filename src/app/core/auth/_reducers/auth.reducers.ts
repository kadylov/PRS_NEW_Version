// Actions
import { AuthActions, AuthActionTypes } from '../_actions/auth.actions';
// Models
import {User1} from '../_models/user1.model';
import {User} from '../../../../../../demo1/src/app/core/auth';

export interface AuthState {
    loggedIn: boolean;
    user: User1;
    isUserLoaded: boolean;
}

export const initialAuthState: AuthState = {
    loggedIn: false,
    user: undefined,
    isUserLoaded: false
};

export function authReducer(state = initialAuthState, action: AuthActions): AuthState {
    switch (action.type) {
        case AuthActionTypes.Login: {
            return {
                loggedIn: false,
                user: undefined,
                isUserLoaded: false
            };
        }

		case AuthActionTypes.UserLoaded: {
			const _user: User1 = action.user;
			return {
				loggedIn: true,
				user: _user,
				isUserLoaded: true
			};
		}

        case AuthActionTypes.Logout:
            return initialAuthState;
        default:
            return state;
    }
}
