import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";

import {
	firestore,
	auth,
	googleProvider,
	getCurrentUser,
	createUserProfileDocument,
} from "../../firebase.utils";

import {
	signInSuccess,
	signInFailure,
	signOutSuccess,
	signOutFailure,
	signUpSuccess,
	signUpFailure,
} from "./user.action";

export function* getSnapshotFromUserAuth(userAuth) {
	console.log(userAuth);
	try {
		const userRef = yield firestore.collection("users").doc(`${userAuth.uid}`);
		const userSnapshot = yield userRef.get();
		console.log("userSnapshot.data",userSnapshot.data())
		yield put(signInSuccess({ uid: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);

		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);

		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* isUserAuthenticated() {
	console.log("CHECK_USER_SESSION - with SAGA");
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (error) {
		put(signOutFailure(error));
	}
}

export function* signUp({ payload: { email, password, displayName } }) {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);
		yield user.updateProfile({ displayName: displayName });
		yield createUserProfileDocument(user);
		console.log("user on signUp", user);
		yield put(signUpSuccess({ email, password }));
	} catch (error) {
		yield signUpFailure(error);
	}
}

/* export function* signInAfterSignUpSuccess({ payload: { user } }) {
	console.log("signInAfterSignUpSuccess", user);
	yield getSnapshotFromUserAuth(user);
} */

export function* onCheckUserSession() {
	yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignInStart() {
	yield takeLatest(UserActionTypes.GOOLGE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
	yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignOutStart() {
	yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
	yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
	yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInWithEmail);
}

export function* userSaga() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onCheckUserSession),
		call(onSignOutStart),
		call(onSignUpStart),
		call(onSignUpSuccess),
	]);
}
