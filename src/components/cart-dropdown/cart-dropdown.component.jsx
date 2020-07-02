import React from "react";

// Needed for redux state management
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

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
// Nested destructuring for more syntactic sugar
const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

// Pass it again since one-way data flow
export default connect(mapStateToProps)(CartDropdown);
