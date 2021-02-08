import React from "react";
import { connect } from "react-redux";

import { toggleCartDropdown } from "../vendors/redux/cart/cart.action";

import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";

const CartIcon =({ toggleCartDropdown }) => {

	return (
		<div className="cart-icon" onClick={toggleCartDropdown} >
			<ShoppingIcon className="cart-icon--icon"/>
			<span className="cart-icon--item-count">0</span>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleCartDropdown: () => dispatch(toggleCartDropdown())
	}
}

export default connect(null,mapDispatchToProps)(CartIcon)