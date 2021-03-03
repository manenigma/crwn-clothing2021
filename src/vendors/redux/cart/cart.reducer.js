import { cartActionTypes } from "./cart.types";

import { addItemToCart, removeItemFromCart } from "../utilities/cart.utils";

const INITIAL_STATE = {
	cartDropdownHidden: true,
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	const { cartDropdownHidden, cartItems } = state;
	switch (action.type) {
		case cartActionTypes.TOGGLE_CART_DROPDOWN:
			return {
				...state,
				cartDropdownHidden: !cartDropdownHidden,
			};
		case cartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(cartItems, action.payload),
			};
		case cartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(cartItems, action.payload),
			};
		case cartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: cartItems.filter(
					(cartItem) => cartItem.id !== action.payload.id
				),
			};
		case cartActionTypes.CLEAR_CART:
			return {
				...state,
				cartItems: [],
			};
		default:
			return state;
	}
};

export default cartReducer;
