import React from "react";

import CustomButton from "./custom-button.component";

const CartDropdown = () => {

	return (
		<div className="cart-dropdown">
			<div className="cart-dropdown--items" />
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	)
}

export default CartDropdown