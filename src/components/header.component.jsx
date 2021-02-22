import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../vendors/redux/user/user.selector";
import { selectCartDropdownHidden } from "../vendors/redux/cart/cart.selector";

import { Link } from "react-router-dom";
import { auth } from "../vendors/firebase.utils";
import { ReactComponent as Logo } from "../assets/crown.svg";

import CartIcon from "./cart-icon.component";
import CartDropdown from "./cart-dropdown.component";

const Header = ({ currentUser, cartDropdownHidden }) => {
	// console.log(otherProps);
	// console.log(currentUser);
	// console.log("toggleCartDropdown", cartDropdownHidden);
	return (
		<div className="header">
			<Link className="header--logo-box" to="/">
				<Logo className="header--logo-box__logo"></Logo>
			</Link>
			<div className="header--nav-box">
				<Link className="header--nav-box__option" to="/shop">
					SHOP
				</Link>
				<Link className="header--nav-box__option" to="/contact">
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
			{cartDropdownHidden ? null : <CartDropdown />}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	cartDropdownHidden: selectCartDropdownHidden,
});

export default connect(mapStateToProps)(Header);
