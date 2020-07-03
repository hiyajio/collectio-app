// Syntactic sugar - simply pull in the data from external JS Object file
import SHOP_DATA from "./shop.data";

// Initial state needed since we don't want app to start without collections shown
const INITIAL_STATE = {
	collections: SHOP_DATA,
};

// Any and all reducers for shop goes into this and is checked using switch case
const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default shopReducer;
