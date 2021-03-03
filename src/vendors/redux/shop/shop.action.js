import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase.utils";
import ShopActionTypes from "./shop.types";

export const fetchCollectionStart = () => {
	return {
		type: ShopActionTypes.FETCH_COLLECTIONS_START,
	};
};

export const fetchCollectionSuccess = (collectionsMap) => {
	// console.log(collectionsMap);
	return {
		type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
		payload: collectionsMap,
	};
};

export const fetchCollectionFailure = (errorMessage) => {
	return {
		type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
		payload: errorMessage,
	};
};

export const fetchCollectionStartAsync = () => {
	return (dispatch) => {
		const collectionRef = firestore.collection("collections");
		dispatch(fetchCollectionStart());

		collectionRef
			.get()
			.then(async (collectionSnapshot) => {
				const collectionMap = convertCollectionsSnapshotToMap(collectionSnapshot);
				// console.log(collectionMap);
				dispatch(fetchCollectionSuccess(collectionMap));
			})
			.catch((error) => dispatch(fetchCollectionFailure(error.message)));
	};
};
