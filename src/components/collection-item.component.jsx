import React from "react";
// const myImage = require(`../images/shop-img/hats/brown-cowboy.png`)

const CollectionItem = ({ name, price, imageUrl }) => {
	return(
		<div className="collection-box" >
			<div className="collection-box--header">
				<div  className="collection-box--header__image" style={{ backgroundImage: `url(${imageUrl})`}} />
				<div className="collection-box--header__button"><span className="btn--title">Add Cart</span></div>
			</div>
			<div className="collection-box--footer">
				<span className="collection-box--footer__name">{name}</span>
				<span className="collection-box--footer__price">{`$${price}`}</span>
			</div>
		</div>
	)
}

export default CollectionItem

// require(`${imageUrl}`)