import React from "react";

const CartItem = ({ cartItem: { id, imageUrl, name, price, quantity } }) => {
	return (
		<div className="cart-item">
			<div className="cart-item--img-box">
				<img src={imageUrl} alt="item" />
			</div>
			<div className="cart-item--detail">
				<span className="cart-item--detail__name">{name}</span>
				<span className="cart-item--detail__price">
					{quantity} x ${price}
				</span>
			</div>
		</div>
	);
};

export default CartItem;
