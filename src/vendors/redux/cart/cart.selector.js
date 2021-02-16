import { createSelector } from "reselect";

const selectCart = (state) => {
	return state.cart;
};

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
	[selectCartItems],
	(cartItems) => {
		return cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
	}
);

export const selectCartDropdownHidden = createSelector(
	[selectCart],
	(cart) => cart.cartDropdownHidden
);

export const selectCarTotal = createSelector([selectCartItems], (cartItems) => {
	return cartItems.reduce(
		(acc, cartItem) => acc + cartItem.quantity * cartItem.price,
		0
	);
});
