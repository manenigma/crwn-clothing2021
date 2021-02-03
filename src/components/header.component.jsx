import React from "react";

import { Link, withRouter } from "react-router-dom";
import { auth } from "../vendors/firebase.utils";
import { ReactComponent as Logo } from "../assets/crown.svg";

const Header = ({ currentUser, history, ...otherProps }) => {
	console.log(otherProps);
	return (
		<div className="header">
			<Link className="header--logo-box" to="/">
				<Logo className="header--logo-box__logo"></Logo>
			</Link>
			<div className="header--nav-box">
				<Link className="header--nav-box__option" to="/shop">
					SHOP
				</Link>
				<Link className="header--nav-box__option" to="/shop">
					CONTACT
				</Link>
				{currentUser ? (
					<div
						className="header--nav-box__option"
						onClick={() => auth.signOut()}
					>
						SIGN OUT
					</div>
				) : (
					<Link className="header--nav-box__option" to="/signin">
						SIGN IN
					</Link>
				)}

				<div className="header--nav-box__option ">Cart</div>
			</div>
		</div>
	);
};

export default withRouter(Header);
