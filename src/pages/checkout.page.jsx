import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import StripeCheckoutButton from "../components/stripe-button.component";

import {
	selectCartItems,
	selectCarTotal,
} from "../vendors/redux/cart/cart.selector";

import CheckoutItem from "../components/checkout-item";

const CheckOutPage = ({ cartItems, totalPrice }) => {
	// console.log("cartItems", cartItems)
	return (
		<div className="checkout-page">
			<div className="checkout-page--header">
				<span className="checkout-page--header__product">Product</span>
				<span className="checkout-page--header__desp">Description</span>
				<span className="checkout-page--header__qty">Quantity</span>
				<span className="checkout-page--header__price">Price</span>
				<span className="checkout-page--header__remove">Remove</span>
			</div>
			{cartItems.map((cartItem) => {
				return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
			})}
			<div className="checkout-page--total-price">TOTAL: ${totalPrice}</div>
			<div className="checkout-page--footer">
				<div className="test-warining">
					<div>*Please use the following test credit card for payments*</div>
					<div>4242 4242 4242 4242 --- Exp:01/22 --- CVV: 123</div>
				</div>
				<StripeCheckoutButton price={totalPrice} />
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	totalPrice: selectCarTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
