import React from "react";
// const myImage = require(`../images/shop-img/hats/brown-cowboy.png`)
import { connect } from "react-redux";

import { addItem } from "../vendors/redux/cart/cart.action";

import CustomButton from "./custom-button.component";

const CollectionItem = ({ item, addItemToCart }) => {
	// console.log("item", item);
	const { name, price, imageUrl } = item
	return (
		<div className="collection-box">
			<div className="collection-box--header">
				<div
					className="collection-box--header__image"
					style={{ backgroundImage: `url(${imageUrl})` }}
				/>
			</div>
			<div className="collection-box--footer">
				<span className="collection-box--footer__name">{name}</span>
				<span className="collection-box--footer__price">{`$${price}`}</span>
			</div>
			<CustomButton inverted onClick={() => addItemToCart(item)} >Add to Cart</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {

	return {
		addItemToCart: (item) => dispatch(addItem(item))
	}
}

export default connect(null, mapDispatchToProps)(CollectionItem);

// require(`${imageUrl}`)
