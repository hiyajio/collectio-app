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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	// Check if already exists in cart. If not, it will equate to null
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	// Remove the item entirely from the list since it's just 1
	if (existingCartItem.quantity === 1) {
		// Filter returns new array of variables that evaluated to true
		return cartItems.filter(
			// If it's not the item we want to remove, keep it as cart item
			(cartItem) => cartItem.id !== cartItemToRemove.id
		);
	}

	// Check where it matches and decrease that quantity by 1
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};
