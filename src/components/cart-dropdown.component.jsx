import React from "react";

import { connect } from "react-redux";
import { selectCartItems } from "../vendors/redux/cart/cart.selector";

import CustomButton from "./custom-button.component";
import CartItem from "./cart-item.component";

const CartDropdown = ({ cartItems }) => {

	return (
		<div className="cart-dropdown">
			<div className="cart-dropdown--items">
				{
					cartItems.map((cartItem) => {
						return (
							<CartItem key={cartItem.id} cartItem={cartItem} />
						)
					})
				}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		cartItems: selectCartItems(state)
	}
}

export default connect(mapStateToProps)(CartDropdown)