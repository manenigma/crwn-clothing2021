import React from "react";
import { connect } from 'react-redux';

import { selectCollection } from '../vendors/redux/shop/shop.selector';

import CollectionItem from "../components/collection-item.component";

const CollectionPage = ({ collection }) => {
	// console.log("collection", collection);
	const { title, items } = collection
	return (
		<div className="collection">
			<h2 className="collection--title">{`${title}`}</h2>
			<div className="collection--items">
			{
				items.map((item) => {
					return (
						<CollectionItem key={item.id} item={item} />
					)
				})
			}
			</div>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	// console.log("mapStateToProps", ownProps);
	const { match: {params: { collectionId } } } = ownProps
	return {
		collection: selectCollection(collectionId)(state)
	}
}

export default connect(mapStateToProps)(CollectionPage)
