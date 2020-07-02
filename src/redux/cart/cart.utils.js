export const addItemToCart = (cartItems, cartItemToAdd) => {
	// Check if already exists in cart. If not, it will equate to null
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	);

	// Check if not null
	if (existingCartItem) {
		// Check where it matches and increase that quantity by 1
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	// If new item, simply add to end of cart and give default quantity of 1
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
