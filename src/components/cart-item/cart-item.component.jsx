import React from "react";

import "./cart-item.styles.scss";

// Destructuring 'prop' into their specific counterparts for syntactic sugar
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	// Render a Cart Item preview for the Cart Dropdown
	<div className="cart-item">
		<img src={imageUrl} alt="item" />
		<div className="item-details">
			<span className="name">{name}</span>
			<span className="price">
				{quantity} x ${price}
			</span>
		</div>
	</div>
);

export default React.memo(CartItem);
