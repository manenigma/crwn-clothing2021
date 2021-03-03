import { takeLatest, call, put, all } from "redux-saga/effects";

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase.utils";

import ShopActionTypes from "./shop.types";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.action";

export function* fetchCollectionStartAsync() {
	yield console.log("I am fired");

	try {
		const collectionRef = firestore.collection("collections");
		const collectionSnapshot = yield collectionRef.get();
		const collectionMap = yield call(
			convertCollectionsSnapshotToMap,
			collectionSnapshot
		);
		yield put(fetchCollectionSuccess(collectionMap));
	} catch (error) {
		yield put(fetchCollectionFailure(error.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionStartAsync)
}

export function* shopSaga() {
	yield all([call(fetchCollectionsStart)])
}
