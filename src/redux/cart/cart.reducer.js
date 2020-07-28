import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

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
				// Simple toggle functionality using '!'
				hidden: !state.hidden,
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				// Use utility function
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				// Use utility function
				cartItems: removeItemFromCart(state.cartItems, action.payload),
			};
		case CartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				// Filter returns new array of variables that evaluated to true
				cartItems: state.cartItems.filter(
					// If it's not the item we want to remove, keep it as cart item
					(cartItem) => cartItem.id !== action.payload.id
				),
			};
		case CartActionTypes.CLEAR_CART:
			return {
				...state,
				// Clear out entire cart
				cartItems: [],
			};
		default:
			return state;
	}
};

export default cartReducer;
