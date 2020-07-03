import React from "react";

// Needed for pre-built Stripe Checkout Button
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	// Multiply by 100 since Stripe API only takes it in cents
	const priceForStripe = price * 100;
	// Publishable Key from Stripe dashboard when signed in
	const publishableKey =
		"pk_test_51H0ir7H2ScYshltDFtu6eWQuWYG57ZTwOc1sNw9wxIcKJKswKdXDmPq8fgga5MSDdY1kbjGv0IVvzFNr0Of5clIu006G1WIJ7h";

	// Show success message
	const onToken = (token) => {
		alert("Payment Successful");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Collectio LLC"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/MaE.svg"
			description={`Your total is $${price}`}
			amoount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			alipay
			bitcoin
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
