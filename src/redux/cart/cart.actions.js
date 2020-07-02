import { CartActionTypes } from "./cart.types";

// Action for toggling Cart Dropdown
export const toggleCartHidden = () => ({
	// Payload is optional for actions and reducers as none is used here
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

// Action for adding Cart Item
export const addItem = (item) => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item,
});
