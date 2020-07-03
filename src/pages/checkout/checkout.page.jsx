import React from "react";

// Needed for redux state management
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import "./checkout.styles.scss";

// Destructuring 'prop' into their specific counterpart for syntactic sugar
const CheckoutPage = ({ cartItems, total }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
		{/* Map through and display items in cart */}
		{cartItems.map((cartItem) => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<div className="total">Total: ${total}</div>
		{/* Test credit cards from react-stripe-checkout */}
		<div className="test-warning">
			*NOTE* Please use one of the following test credit cards for
			payments <br /> VISA: 4242 4242 4242 4242 | Exp: Any future date |
			CVV: Any 3 digits <br /> Mastercard: 5555 5555 5555 4444 | Exp: Any
			future date | CVV: Any 3 digits
		</div>
		{/* Custom Stripe checkout button from react-stripe-checkout */}
		<StripeCheckoutButton price={total} />
	</div>
);

// Gain access to cartItems and total state
// Syntactic sugar for Selectors as no need to explicitly type passing of state
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

// Pass it again since one-way data flow
export default connect(mapStateToProps)(CheckoutPage);
