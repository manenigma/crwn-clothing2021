import React from "react";

import CollectionPreview from "../components/collection-preview.component";


import SHOPDATA from "../base/utilities";
class ShopPage extends React.Component {
	constructor() {
		super();
		
		this.state = {
			collections: SHOPDATA
		}
	}
	

	render() {

		return (
			<div className="shop-page">
			<h1 className="shop-page--title">Collectoins</h1>
			{
				this.state.collections.map( ({id, ...otherCollectionProps}) => {
					return (<CollectionPreview key={id} {...otherCollectionProps} />)
				})
			}
			</div>
		)
	}
}

export default ShopPage