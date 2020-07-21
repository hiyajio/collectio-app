import ShopActionTypes from "./shop.types";

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

// Action that simply switches our isFetching to true
export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

// Action that returns us the collection and tells us we succeeded in the async get
export const fetchCollectionsSuccess = (collectionsMap) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap,
});

// Action that returns us the error message and tells us we failed in the async get
export const fetchCollectionsFailure = (errorMessage) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage,
});

// Async HOF that calls on other functions and syncs all of them for us
export const fetchCollectionsStartAsync = () => {
	return (dispatch) => {
		// Once shop page is mounted, retrive collection
		const collectionRef = firestore.collection("collections");

		// Start fetch function
		dispatch(fetchCollectionsStart());

		collectionRef
			.get()
			.then((snapshot) => {
				const collectionsMap = convertCollectionsSnapshotToMap(
					snapshot
				);
				// Success function
				dispatch(fetchCollectionsSuccess(collectionsMap));
			})
			.catch((error) => dispatch(fetchCollectionsFailure(error.message)));
		// Failure function
	};
};
