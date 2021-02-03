import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-storage";
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
//   export const firestore = firebase.firestore();

// Authenticate Using Google Sign-In with JavaScript
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
