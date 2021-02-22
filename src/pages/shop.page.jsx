import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../components/collections-overview";
import CollectionPage from './collection.page';

const ShopPage = (props) => {
	// console.log("props", props)
	const { match } = props
	return (
		<div className="shop-page">
			<h1 className="shop-page--title">Collectoins</h1>
			<Route exact path={`${match.path}`} component={CollectionsOverview} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</div>
	);
};

export default ShopPage
