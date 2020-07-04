import ShopActionTypes from "./shop.types";
// Syntactic sugar - simply pull in the data from external JS Object file
// Deprecated => Data used in app should be on Firebase and not local
// import SHOP_DATA from "./shop.data";

// Initial state needed since we don't want app to start without collections shown
const INITIAL_STATE = {
	// Deprecated => Data used in app should be on Firebase and not local
	// collections: SHOP_DATA,
	collections: null,
};

// Any and all reducers for shop goes into this and is checked using switch case
const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ShopActionTypes.UPDATE_COLLECTIONS:
			return {
				...state,
				collections: action.payload,
			};
		default:
			return state;
	}
};

export default shopReducer;
