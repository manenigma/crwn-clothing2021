import React from "react";
import { Switch, Route } from "react-router-dom";
import { auth, firestore } from "./vendors/firebase.utils";
// import './App.css';

import HomePage from "./pages/homepage.page";
import ShopPage from "./pages/shop.page";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page";
import Header from "./components/header.component";

class App extends React.Component {
	constructor() {
		super();

		this.state = { currentUser: null };
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				// console.log("APP=>componentDidMount=>onAuthStateChanged", userAuth);
				const userRef = firestore.collection("users").doc(`${userAuth.uid}`);
				// console.log("check A1");

				userRef.onSnapshot((userSnapshot) => {
					// console.log("check A2 userSnapshot.data", userSnapshot.data());
					this.setState({
						currentUser: {
							uid: userSnapshot.id,
							...userSnapshot.data(),
						},
					});
					console.log("check A3 this.state:", this.state);
				});
			} else {
				this.setState({ currentUser: userAuth });
			}

			console.log("check A4 this.state:", this.state);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className="container">
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
