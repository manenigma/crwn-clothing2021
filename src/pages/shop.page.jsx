import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
// import { createStructuredSelector } from "reselect";

import CollectionsOverviewContainer from "../components/collections-overview.container";
import CollectionPageContainer from "../pages/collection.page.container";
import { fetchCollectionStart } from "../vendors/redux/shop/shop.action";
// import {
// 	selectIsCollectionFetching,
// 	selectIsCollectionsLoaded,
// } from "../vendors/redux/shop/shop.selector";

// import WithSpinner from "../components/with-spinner.component";

// import {
// 	firestore,
// 	convertCollectionsSnapshotToMap,
// } from "../vendors/firebase.utils";

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ fetchCollectionStart, match, history }) => {
	useEffect(() => {
		fetchCollectionStart();
	}, [fetchCollectionStart])

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
					component={CollectionsOverviewContainer}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPageContainer}
				/>
			</div>
	)
	
}

// class ShopPage extends React.Component {
// 	// state = {
// 	// 	isLoading: true,
// 	// };

// 	// unsubscribeFromSnapshot = null;

// 	// componentDidMount() {
// 		// const { fetchCollectionStart } = this.props;
// 		// fetchCollectionStart();
// 		// const { updateCollections } = this.props;
// 		// const collectionRef = firestore.collection("collections");
// 		// /* fetch(
// 		// 	"https://firestore.googleapis.com/v1/projects/crwn-db-f2166/databases/(default)/documents/collections"
// 		// )
// 		// 	.then((response) => response.json())
// 		// 	.then((collections) => console.log(collections)); */
// 		// collectionRef.get().then(async (snapshot) => {
// 		// 	// console.log(snapshot);
// 		// 	const collectionMap = convertCollectionsSnapshotToMap(snapshot);
// 		// 	// console.log(collectionMap);
// 		// 	updateCollections(collectionMap);
// 		// 	this.setState({ isLoading: false });
// 		// });
// 		// /* collectionRef.onSnapshot(async (snapshot) => {
// 		// 	// console.log(snapshot);
// 		// 	const collectionMap = convertCollectionsSnapshotToMap(snapshot);
// 		// 	// console.log(collectionMap);
// 		// 	updateCollections(collectionMap);
// 		// 	this.setState({ isLoading: false });
// 		// }); */
// 	}

// 	// render() {
// 	// 	// const { match, history } = this.props;
// 	// 	// const { isLoading } = this.state;
// 	// 	// console.log(this.props);
// 	// 	// const { isCollectionFetching, isCollectionsLoaded } = this.props;
// 	// 	// console.log(isCollectionFetching);

// 	// 	return (
// 	// 		<div className="shop-page">
// 	// 			<h1
// 	// 				className="shop-page--title"
// 	// 				onClick={() => history.push(`${match.url}`)}
// 	// 			>
// 	// 				Collectoins
// 	// 			</h1>
// 	// 			<Route
// 	// 				exact
// 	// 				path={`${match.path}`}
// 	// 				component={CollectionsOverviewContainer}
// 	// 			/>
// 	// 			<Route
// 	// 				path={`${match.path}/:collectionId`}
// 	// 				component={CollectionPageContainer}
// 	// 			/>
// 	// 		</div>
// 	// 	);
// 	// }
// }

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCollectionStart: () => dispatch(fetchCollectionStart()),
	};
};

export default connect(null, mapDispatchToProps)(ShopPage);
