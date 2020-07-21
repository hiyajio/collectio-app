import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import { signInSuccess, signInFailure } from "./user.actions";

import {
	auth,
	googleProvider,
	createUserProfileDocument,
	getCurrentUser,
} from "../../firebase/firebase.utils";

/* Sagas use effects in order to listen and essentially replaces the action
previously in charge of GoogleSignIn functionality from App.js */
// Sagas work through using generators (function* - yield syntax)
// Saga for reusable getSnapshot from Firebase (user auth)
export function* getSnapshotFromUserAuth(userAuth) {
	// try-catch since Firebase API calls might end in failure and async-await
	try {
		// Create the user profile from userAuth from snapshot
		const userRef = yield call(createUserProfileDocument, userAuth);
		const userSnapshot = yield userRef.get();

		// If success, pass userSnapshot to id for app use
		yield put(
			signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
		);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signInWithGoogle() {
	// try-catch since Firebase API calls might end in failure and async-await
	try {
		// Given firebase method from firebase.utils
		const { user } = yield auth.signInWithPopup(googleProvider);
		// Call reusable getSnapshot from user component
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signInWithEmail({ payload: { email, password } }) {
	// try-catch since Firebase API calls might end in failure and async-await
	try {
		// Given firebase method from firebase.utils
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		// Call reusable getSnapshot from user component
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

/* For local persistence i.e. if refresh or revisit to site w/o signing out,
still signed in */
export function* isUserAuthenticated() {
	try {
		// Given firebase method from firebase.utils
		const userAuth = yield getCurrentUser();
		// Quick release valve if there has been no prior user
		if (!userAuth) return;
		// If there is, get the user from firebase again
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

// Saga to listen and catch that user is currently trying to Google Sign In
export function* onGoogleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

// Saga to listen and catch that user is currently trying to Email Sign In
export function* onEmailSignInStart() {
	yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

// Saga to listen and catch that user has perviously signed in and hasn't signed out
export function* onCheckUserSession() {
	yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

/* all effect simply allows us to run multiple sagas at the same time since
if we don't use it, we have to have multiple yields which won't allow us
to run those sagas concurrently (yield == await) */
export function* userSagas() {
	/* call effect is essentially a function call. Syntax below is equivalent to
    fetchCollectionsStart() => Still works, this is just the saga way of doing things */
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onCheckUserSession),
	]);
}
