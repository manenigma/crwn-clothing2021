import React from "react";

import { connect } from "react-redux";

import {
	clearItemFromCart,
	addItem,
	removeItem,
} from "../vendors/redux/cart/cart.action";

const CheckoutItem = ({
	cartItem,
	clearItem,
	addItemToCart,
	removeItemToCart,
}) => {
	console.log("cartItem", cartItem);
	const { name, quantity, price, imageUrl } = cartItem;
	return (
		<div className="checkout-item">
			<div className="checkout-item--image-box">
				<img src={imageUrl} alt="cartItem" />
			</div>
			<span className="checkout-item--description">{name}</span>
			<span className="checkout-item--quantity">
				<div
					className="checkout-item--quantity__arrow"
					onClick={() => removeItemToCart(cartItem)}
				>
					&#10094;
				</div>
				<span className="checkout-item--quantity__value">{quantity}</span>
				<div
					className="checkout-item--quantity__arrow"
					onClick={() => addItemToCart(cartItem)}
				>
					&#10095;
				</div>
			</span>
			<span className="checkout-item--price">{price}</span>
			<span
				className="checkout-item--button__remove"
				onClick={() => clearItem(cartItem)}
			>
				&#10005;
			</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		clearItem: (item) => dispatch(clearItemFromCart(item)),
		addItemToCart: (item) => dispatch(addItem(item)),
		removeItemToCart: (item) => dispatch(removeItem(item)),
	};
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
