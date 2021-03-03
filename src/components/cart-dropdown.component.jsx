import React from "react";

import { connect } from "react-redux";
import { selectCartItems } from "../vendors/redux/cart/cart.selector";
import { toggleCartDropdown } from "../vendors/redux/cart/cart.action";

import { withRouter } from "react-router-dom";

import CustomButton from "./custom-button.component";
import CartItem from "./cart-item.component";

const CartDropdown = ({ cartItems, ...otherProps }) => {
	// console.log("otherProps", otherProps)

	const { history, dispatch } = otherProps
	return (
		<div className="cart-dropdown">
			<div className={`${cartItems.length ? "flex-start" : ""} cart-dropdown--items`}>
				{
					cartItems.length ?
					cartItems.map((cartItem) => {
						return (
							<CartItem key={cartItem.id} cartItem={cartItem} />
						)
					}) :
					<span className="cart-dropdown--items__detail">cart is emptry</span>
				}
			</div>
			<CustomButton onClick={() => {
				history.push("/checkout")
				dispatch(toggleCartDropdown())
			}} >GO TO CHECKOUT</CustomButton>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		cartItems: selectCartItems(state)
	}
}

export default withRouter(connect(mapStateToProps)(CartDropdown))