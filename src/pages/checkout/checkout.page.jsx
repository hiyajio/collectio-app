import React from "react";

// Needed for redux state management
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cart.selectors";

// Needed for styled-components styling
import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	HeaderBlockContainer,
	TotalContainer,
	WarningContainer,
} from "./checkout.styles";

// import "./checkout.styles.scss"; => Deprecated (converted sass to styled-components)

// Destructuring 'prop' into their specific counterpart for syntactic sugar
const CheckoutPage = ({ cartItems, total }) => (
	<CheckoutPageContainer>
		<CheckoutHeaderContainer>
			<HeaderBlockContainer>
				<span>Product</span>
			</HeaderBlockContainer>
			<HeaderBlockContainer>
				<span>Description</span>
			</HeaderBlockContainer>
			<HeaderBlockContainer>
				<span>Quantity</span>
			</HeaderBlockContainer>
			<HeaderBlockContainer>
				<span>Price</span>
			</HeaderBlockContainer>
			<HeaderBlockContainer>
				<span>Remove</span>
			</HeaderBlockContainer>
		</CheckoutHeaderContainer>
		{/* Map through and display items in cart */}
		{cartItems.map((cartItem) => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<TotalContainer>Total: ${total}</TotalContainer>
		{/* Test credit cards from react-stripe-checkout */}
		<WarningContainer>
			*NOTE* Please use one of the following test credit cards for
			payments <br /> VISA: 4242 4242 4242 4242 | Exp: Any future date |
			CVV: Any 3 digits <br /> Mastercard: 5555 5555 5555 4444 | Exp: Any
			future date | CVV: Any 3 digits
		</WarningContainer>
		{/* Custom Stripe checkout button from react-stripe-checkout */}
		<StripeCheckoutButton price={total} />
	</CheckoutPageContainer>
);

// Gain access to cartItems and total state
// Syntactic sugar for Selectors as no need to explicitly type passing of state
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

// Pass it again since one-way data flow
export default connect(mapStateToProps)(CheckoutPage);
