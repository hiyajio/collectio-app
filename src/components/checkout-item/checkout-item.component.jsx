import React from "react";

import "./checkout-item.styles.scss";

// Destructuring 'prop' into their specific counterpart for syntactic sugar
const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
	<div className="checkout-item">
		<div className="image-container">
			<img src={imageUrl} alt="item" />
		</div>
		<span className="name">{name}</span>
		<span className="quantity">{quantity}</span>
		<span className="price">{price}</span>
		{/* UTF-8 Wingdings equivalent for an 'X' mark */}
		<div className="remove-button">&#10005;</div>
	</div>
);

export default CheckoutItem;
