import React from "react";

// Needed for redux state management
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

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

// Gain access to itemCount state
// Syntactic sugar for Selectors as no need to explicitly type passing of state
const mapStateToProps = createStructuredSelector({
	// Calculate the total number of items in the cart to display as number
	itemCount: selectCartItemsCount,
});

// Update and dispatch global redux reducer to all listeners
const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// Pass it again since one-way data flow
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
