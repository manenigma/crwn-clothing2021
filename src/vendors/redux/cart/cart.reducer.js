import { cartActionTypes } from "./cart.types";

import { addItemToCart } from "../utilities/cart.utils";

const INITIAL_STATE = {
	cartDropdownHidden: true,
	cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
	const { cartDropdownHidden, cartItems} = state
	switch (action.type) {
		case cartActionTypes.TOGGLE_CART_DROPDOWN:
			return {
				...state,
				cartDropdownHidden: !cartDropdownHidden,
			};
		case cartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(cartItems, action.payload)
			};

		default:
			return state;
	}
};

export default cartReducer;
