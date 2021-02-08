import { cartActionTypes } from "./cart.types";

export const toggleCartDropdown = () => {
	return {
		type: cartActionTypes.TOGGLE_CART_DROPDOWN
	}
}

export const addItem = (item) => {

	return {
		type: cartActionTypes.ADD_ITEM,
		payload: item
	}
}
