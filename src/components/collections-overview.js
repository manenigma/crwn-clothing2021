import React from "react";
import { connect } from "react-redux";

import { selectShopCollectionsOverview } from "../vendors/redux/shop/shop.selector";

import CollectionPreview from "./collection-preview.component";

const CollectionsOverview = ({ collections }) => {
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherCollectionProps }) => {
				return <CollectionPreview key={id} {...otherCollectionProps} />;
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		collections: selectShopCollectionsOverview(state),
	};
};

export default connect(mapStateToProps)(CollectionsOverview);
