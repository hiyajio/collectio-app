import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import { googleSignInSuccess, googleSignInFailure } from "./user.actions";

import {
	auth,
	googleProvider,
	createUserProfileDocument,
} from "../../firebase/firebase.utils";

/* Sagas use effects in order to listen and essentially replaces the action
previously in charge of GoogleSignIn functionality from App.js */
export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		const userRef = yield call(createUserProfileDocument, user);
		const userSnapshot = yield userRef.get();

		yield put(
			googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
		);
	} catch (error) {
		yield put(googleSignInFailure(error));
	}
}

// Sagas work through using generators (function* - yield syntax)
export function* onGoogleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

/* all effect simply allows us to run multiple sagas at the same time since
if we don't use it, we have to have multiple yields which won't allow us
to run those sagas concurrently (yield == await) */
export function* userSagas() {
	/* call effect is essentially a function call. Syntax below is equivalent to
    fetchCollectionsStart() => Still works, this is just the saga way of doing things */
	yield all([call(onGoogleSignInStart)]);
}
