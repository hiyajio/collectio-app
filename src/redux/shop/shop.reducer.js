import ShopActionTypes from "./shop.types";

// Initial state needed since we don't want app to start without collections shown
const INITIAL_STATE = {
	collections: null,
	// To tell reducer if we are still fetching data from Firebase (async)
	isFetching: false,
	// For FETCH_COLLECTIONS_FAILURE (error message for async data retrieval)
	errorMessage: undefined,
};

// Any and all reducers for shop goes into this and is checked using switch case
const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		// isFetching toggler reducer
		case ShopActionTypes.FETCH_COLLECTIONS_START:
			return {
				...state,
				isFetching: true,
			};
		// Returns collection if successful and toggles isFetching
		case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
			return {
				...state,
				isFetching: false,
				collections: action.payload,
			};
		// Returns error message if failure and toggles isFetching
		case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default shopReducer;
