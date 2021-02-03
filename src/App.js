import React from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./vendors/firebase.utils";
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

	unsubscribeFromAuth = null

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			if(user) {
				console.log('Auth User already signed-in Firebase.')
				this.setState({ currentUser: user })
				
			} else {
				console.log('Auth User was signed-out Firebase.')
			}
			console.log('user auth object', user)
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth()
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
