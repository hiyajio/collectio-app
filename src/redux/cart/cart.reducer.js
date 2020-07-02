import { CartActionTypes } from "./cart.types";

// Initial state needed since we don't want dropdown showing to start
const INITIAL_STATE = {
	hidden: true,
};

// Any and all reducers for cart goes into this and is checked using switch case
const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				// simple toggle functionality using '!'
				hidden: !state.hidden,
			};
		default:
			return state;
	}
};

export default cartReducer;
