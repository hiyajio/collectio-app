import React from "react";

import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

// Syntax for using SVG as component in react
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

// Destructuring 'prop' into their specific counterpart for syntactic sugar
const CartIcon = ({ toggleCartHidden, itemCount }) => (
	// On click, toggle showing of Cart Dropdown
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		{/* Counter within Icon for items in cart */}
		<span className="item-count">{itemCount}</span>
	</div>
);

// Gain access to cartItems state
// Nested destructuring for more syntactic sugar
const mapStateToProps = ({ cart: { cartItems } }) => ({
	// Calculate the total number of items in the cart to display as number
	itemCount: cartItems.reduce(
		(accumulatedQuantity, cartItem) =>
			accumulatedQuantity + cartItem.quantity,
		0
	),
});

// Update and dispatch global redux reducer to all listeners
const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// Pass it again since one-way data flow
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
