import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyDdQhYRHtgUyu46Wl4fB3NbCzOwetF7We0",
	authDomain: "crwn-db-f2166.firebaseapp.com",
	projectId: "crwn-db-f2166",
	storageBucket: "crwn-db-f2166.appspot.com",
	messagingSenderId: "53988074850",
	appId: "1:53988074850:web:465a0481e4d6f9769fb83b",
	measurementId: "G-55F21W6Y50",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Authenticate Using Google Sign-In with JavaScript
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({
	prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth) => {
	// console.log("check F1 firebase=>createUserProfileDocument", userAuth);
	if (!userAuth) return; // Have Auth User already signed-in Firebase. not null => true === null => return

	// Does not Exist in Firebase .exists return false
	const { displayName, email, photoURL } = userAuth;
	// console.log("check F2 userAuth.displayName", userAuth.displayName);
	const userRef = firestore.collection("users").doc(`${userAuth.uid}`);
	userRef.get().then((userSnapshot) => {
		// console.log("check F3 !userSnapshot.exists", !userSnapshot.exists);
		if (!userSnapshot.exists) {
			// const createdAt = new Date();

			userRef
				.set({
					displayName,
					email,
					photoURL,
					createdAt: firebase.firestore.FieldValue.serverTimestamp(), // Use server timestamp
				})
				.then(() => console.log("Document successfully written!"))
				.catch((error) =>
					console.error("Error writing document: ", error.message)
				);
		}
	});
	// console.log("check F6");
	return userRef;
};

export const googleSignInPopup = () => {
	auth
		.signInWithPopup(GoogleProvider)
		.then(({ user }) => {
			// const user = result.user;
			createUserProfileDocument(user)
		})
		.catch((error) => {
			console.log("Sign in with Google Error!", error.message)

		});
};

export default firebase;
