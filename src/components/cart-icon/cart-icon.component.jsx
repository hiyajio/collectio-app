import React from "react";

import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

// Syntax for using SVG as component in react
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

// Destructuring 'prop' into their specific counterpart for syntactic sugar
const CartIcon = ({ toggleCartHidden }) => (
	// On click, toggle showing of Cart Dropdown
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		{/* Counter within Icon for items in cart */}
		<span className="item-count">0</span>
	</div>
);

// Update and dispatch global redux reducer to all listeners
const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// Pass it again since one-way data flow
export default connect(null, mapDispatchToProps)(CartIcon);
