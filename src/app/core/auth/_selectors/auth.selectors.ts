// NGRX
import { createSelector } from '@ngrx/store';


export const selectAuthState = state => state.auth;

export const isLoggedIn = createSelector(
    selectAuthState,
    auth => auth.loggedIn
);

export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
);


export const isUserLoaded = createSelector(
    selectAuthState,
    auth => auth.isUserLoaded
);

export const currentUser = createSelector(
    selectAuthState,
    auth => auth.user
);