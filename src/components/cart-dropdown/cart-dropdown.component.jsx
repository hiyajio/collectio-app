import React from "react";

// Needed for redux state management
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./cart-dropdown.styles.scss";

// Destructuring 'prop' into their specific counterpart for syntactic sugar
const CartDropdown = ({ cartItems }) => (
	<div className="cart-dropdown">
		{/* Map through all current items in cart */}
		<div className="cart-items">
			{cartItems.map((cartItem) => (
				<CartItem key={cartItem.id} item={cartItem} />
			))}
		</div>
		<CustomButton>CHECKOUT</CustomButton>
	</div>
);

// Gain access to cartItems state
// Syntactic sugar for Selectors as no need to explicitly type passing of state
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

// Pass it again since one-way data flow
export default connect(mapStateToProps)(CartDropdown);
