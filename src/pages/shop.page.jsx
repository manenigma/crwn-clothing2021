import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionsOverview from "../components/collections-overview";
import CollectionPage from "./collection.page";
import { updateCollections } from "../vendors/redux/shop/shop.action";
import WithSpinner from "../components/with-spinner.component";

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../vendors/firebase.utils";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	state = {
		isLoading: true,
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection("collections");

		/* fetch(
			"https://firestore.googleapis.com/v1/projects/crwn-db-f2166/databases/(default)/documents/collections"
		)
			.then((response) => response.json())
			.then((collections) => console.log(collections)); */

		collectionRef.get().then(async (snapshot) => {
			// console.log(snapshot);

			const collectionMap = convertCollectionsSnapshotToMap(snapshot);

			// console.log(collectionMap);
			updateCollections(collectionMap);
			this.setState({ isLoading: false });
		});

		/* collectionRef.onSnapshot(async (snapshot) => {
			// console.log(snapshot);

			const collectionMap = convertCollectionsSnapshotToMap(snapshot);

			// console.log(collectionMap);
			updateCollections(collectionMap);
			this.setState({ isLoading: false });
		}); */
	}

	render() {
		const { match, history } = this.props;
		const { isLoading } = this.state;
		// console.log(this.props);

		return (
			<div className="shop-page">
				<h1
					className="shop-page--title"
					onClick={() => history.push(`${match.url}`)}
				>
					Collectoins
				</h1>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => {
						return (
							<CollectionsOverviewWithSpinner
								isLoading={isLoading}
								{...props}
							/>
						);
					}}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => {
						return (
							<CollectionPageWithSpinner isLoading={isLoading} {...props} />
						);
					}}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateCollections: (collections) => {
			return dispatch(updateCollections(collections));
		},
	};
};

export default connect(null, mapDispatchToProps)(ShopPage);
