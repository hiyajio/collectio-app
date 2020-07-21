import ShopActionTypes from "./shop.types";

import { takeLatest, call, put, all } from "redux-saga/effects";

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
	fetchCollectionsSuccess,
	fetchCollectionsFailure,
} from "./shop.actions";

/* Sagas use effects in order to listen and essentially replaces the action
previously in charge of async functionality 'fetchCollectionsStartAsync' */
export function* fetchCollectionsAsync() {
	/* we yield in order to cede control to redux-saga and have it resolve
	which actions should fire first, which ones get cancelled by others, etc. */
	yield console.log("I am fired");

	// Since yields are equivalent to await, think of try-catch here as async
	try {
		// Once shop page is mounted, retrive collection
		const collectionRef = firestore.collection("collections");

		/* Essentially think of this as a promise wherein the yield waits for it to
		receive data before continuing with code (async-await) */
		// Easier to think of 'yielf' as 'await'
		const snapshot = yield collectionRef.get();

		// call effect takes in 2 parameters: the function and the input for that function
		const collectionsMap = yield call(
			convertCollectionsSnapshotToMap,
			snapshot
		);

		// put effect is basically a redux dispatch method
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

// Sagas work through using generators (function* - yield syntax)
export function* fetchCollectionsStart() {
	/* takeEvery effect essentially allows us to reuse sagas. Since sagas run on
	generators, you cannot call the generator within it to loop through it again,
	but what takeEvery does is that it simply calls the generator each time it
	fires (think recursion instead of loop) */
	/* yield takeEvery(
		ShopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	); => Deprecated for takeLatest */

	/* takeLatest does what takeEvery does except more efficiently as it only
	resolves the latest call */
	yield takeLatest(
		ShopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	);
}

export function* shopSagas() {
	yield all([call(fetchCollectionsStart)]);
}
