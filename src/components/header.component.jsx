import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { auth } from "../vendors/firebase.utils";
import { ReactComponent as Logo } from "../assets/crown.svg";

import CartIcon from "./cart-icon.component";
import CartDropdown from "./cart-dropdown.component";

const Header = ({ currentUser, hidden }) => {
	// console.log(otherProps);
	// console.log(currentUser);
	console.log("toggleCartDropdown", hidden);
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

				<CartIcon className="header--nav-box__option " />
			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	);
};

const mapStateToProps = ({
	user: { currentUser },
	cartDropdown: { hidden },
}) => {
	return {
		currentUser: currentUser,
		hidden: hidden,
	};
};

export default connect(mapStateToProps)(Header);
