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

/* Memo is useful here as CartItems are served as an array meaning that if I were to add for example,
2 quantities of comicBook1 in my cart and 3 quantities of comicBook2, when I add the x3 comicBook2 it
will actually rerender the 2 quantities of comicBook1 essentially making 5 renders instead of 3.
Memo simply allows us to split this as it allos the code to see that comicBook1 did not change so it
should just use the already cached amount. */
export default React.memo(CartItem);
