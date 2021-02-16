export const addItemToCart = (cartItems, cartItemToAdd) => {
	const exitingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	);

	if (exitingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemRemove) => {
	const exitingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemRemove.id
	);

	if (exitingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemRemove.id);
	}

	return cartItems.map((cartItem) => {
		return cartItem.id === cartItemRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem;
	});
};
