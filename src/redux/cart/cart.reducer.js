import { CartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

// Initial state needed since we don't want dropdown showing to start
const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
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
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				// use utility function
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		default:
			return state;
	}
};

export default cartReducer;
