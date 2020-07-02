import React from "react";

// Needed for redux state management
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

// Destructuring 'prop' into their specific counterpart for syntactic sugar
// We gain access to dispatch since connect auto passes it if no 2nd arg is given
const CartDropdown = ({ cartItems, history, dispatch }) => (
	<div className="cart-dropdown">
		{/* Map through all current items in cart */}
		<div className="cart-items">
			{/* Check if cart is empty. If it is, display empty message */}
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<span className="empty-message">Your cart is empty</span>
			)}
		</div>
		{/* Go to Checkout Page on click */}
		<CustomButton
			onClick={() => {
				history.push("/checkout");
				dispatch(toggleCartHidden());
			}}
		>
			CHECKOUT
		</CustomButton>
	</div>
);

// Gain access to cartItems state
// Syntactic sugar for Selectors as no need to explicitly type passing of state
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

// HOCs work starting from inside. We need to route the connected component
// Pass it again since one-way data flow
export default withRouter(connect(mapStateToProps)(CartDropdown));
