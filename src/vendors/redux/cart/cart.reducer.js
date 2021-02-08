import { cartActionTypes } from "./cart.types";

import { addItemToCart } from "../utilities/cart.utils";

const INITIAL_STATE = {
	hidden: true,
	cartItems: []
};

const cartDropdownReducer = (state = INITIAL_STATE, action) => {
	const { hidden, cartItems} = state
	switch (action.type) {
		case cartActionTypes.TOGGLE_CART_DROPDOWN:
			return {
				...state,
				hidden: !hidden,
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

export default cartDropdownReducer;
