import React from "react";
import { connect } from "react-redux";

import { toggleCartDropdown } from "../vendors/redux/cart/cart.action";
import { selectCartItemCount } from "../vendors/redux/cart/cart.selector";

import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";

const CartIcon = ({ itemCount, toggleCartDropdown }) => {
	return (
		<div className="cart-icon" onClick={toggleCartDropdown}>
			<ShoppingIcon className="cart-icon--icon" />
			<span className="cart-icon--item-count">{itemCount}</span>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		itemCount: selectCartItemCount(state)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleCartDropdown: () => dispatch(toggleCartDropdown()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
