import React from "react";

// Needed for redux state management
import { connect } from "react-redux";

import { clearItemFromCart } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

// Destructuring 'prop' into their specific counterpart for syntactic sugar
const CheckoutItem = ({ cartItem, clearItem }) => {
	// Further destructuring to gain access to specific props
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">{quantity}</span>
			<span className="price">{price}</span>
			{/* UTF-8 Wingdings equivalent for an 'X' mark */}
			{/* Remove item from cart when button is clicked */}
			<div className="remove-button" onClick={() => clearItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

// Update and dispatch global redux reducer to all listeners
const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
});

// Pass it again since one-way data flow
export default connect(null, mapDispatchToProps)(CheckoutItem);
