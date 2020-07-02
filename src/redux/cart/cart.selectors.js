/* Selectors are used to avoid using the entire state and rerendering each time
something is passed through the one-way data flow (i.e. even if nothing changed
for the specific action-reducer combo, they still rerender since they're
sharing the same stream of data */
import { createSelector } from "reselect";

/* Selectors also aim to give us back only a piece of state for further optimization.
Seen here as state => state.cart => cart.cartItems => cartItems.reduce (final) */
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

/* Using selectors essentially caches it so only when changes are detected to the
specific action-reducer combo does it actually rerender (memoized reducer) */
export const selectCartItemsCount = createSelector(
	[selectCartItems],
	// Calculate the total number of items in the cart to display as number
	(cartItems) =>
		cartItems.reduce(
			(accumulatedQuantity, cartItem) =>
				accumulatedQuantity + cartItem.quantity,
			0
		)
);
