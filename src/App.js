import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { auth, firestore } from "./vendors/firebase.utils";
import { createStructuredSelector } from "reselect";
// import './App.css';

import HomePage from "./pages/homepage.page";
import ShopPage from "./pages/shop.page";
import CheckOutPage from "./pages/checkout.page";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page";
import Header from "./components/header.component";

import { setCurrentUser } from "./vendors/redux/user/user.action";

import { selectCurrentUser } from "./vendors/redux/user/user.selector";

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				// console.log("APP=>componentDidMount=>onAuthStateChanged", userAuth);
				const userRef = firestore.collection("users").doc(`${userAuth.uid}`);
				// console.log("check A1");

				userRef.onSnapshot((userSnapshot) => {
					// console.log("check A2 userSnapshot.data", userSnapshot.data());
					setCurrentUser({
						uid: userSnapshot.id,
						...userSnapshot.data(),
					});
					// console.log("check A3 this.state:", this.state);
				});
			} else {
				setCurrentUser(userAuth);
			}

			// console.log("check A4 this.state:", this.state);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		const { currentUser } = this.props
		return (
			<div className="container">
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={CheckOutPage} />
					<Route
						path="/signin"
						render={() =>
							currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
		currentUser: selectCurrentUser
	})

const mapDispatchTopProps = (dispatch) => {
	return {
		setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	};
};

export default connect(mapStateToProps, mapDispatchTopProps)(App);
