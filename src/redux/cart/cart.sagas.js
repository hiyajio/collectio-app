import { all, call, takeLatest, put } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

/* Sagas use effects in order to listen and essentially replaces the action
previously in charge of GoogleSignIn functionality from App.js */
// Sagas work through using generators (function* - yield syntax)
export function* clearCartOnSignOut() {
	yield put(clearCart());
}

// Saga to listen and catch that user has already signed out and cart must be emptied
export function* onSignOutSuccess() {
	yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

/* all effect simply allows us to run multiple sagas at the same time since
if we don't use it, we have to have multiple yields which won't allow us
to run those sagas concurrently (yield == await) */
export function* cartSagas() {
	yield all([call(onSignOutSuccess)]);
}
