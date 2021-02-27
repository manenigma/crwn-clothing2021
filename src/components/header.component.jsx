import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../vendors/redux/user/user.selector";
import { selectCartDropdownHidden } from "../vendors/redux/cart/cart.selector";

import { auth } from "../vendors/firebase.utils";
import { ReactComponent as Logo } from "../assets/crown.svg";

import CartIcon from "./cart-icon.component";
import CartDropdown from "./cart-dropdown.component";

import { HeaderContainer, LogoContainerLink, NavContainer, OptionLink } from '../styled/components/header.styles';

const Header = ({ currentUser, cartDropdownHidden }) => {
	// console.log(otherProps);
	// console.log(currentUser);
	// console.log("toggleCartDropdown", cartDropdownHidden);
	return (
		<HeaderContainer>
			<LogoContainerLink to="/">
				<Logo className="logo"></Logo>
			</LogoContainerLink>
			<NavContainer>
				<OptionLink to="/shop">
					SHOP
				</OptionLink>
				<OptionLink to="/contact">
					CONTACT
				</OptionLink>
				{currentUser ? (
					<OptionLink as='div'
						onClick={() => auth.signOut()}
					>
						SIGN OUT
					</OptionLink>
				) : (
					<OptionLink to="/signin">
						SIGN IN
					</OptionLink>
				)}

				<CartIcon />
			</NavContainer>
			{cartDropdownHidden ? null : <CartDropdown />}
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	cartDropdownHidden: selectCartDropdownHidden,
});

export default connect(mapStateToProps)(Header);
