import React from "react";

// Needed for redux state management
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

// Syntax for using SVG as component in react
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

// Needed for styled-components styling
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
} from "./header.styles";

// import "./header.styles.scss" => Deprecated (converted sass to styled-components)

// Destructuring 'prop' into their specific counterparts for syntactic sugar
const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			{/* Use the custom React Component for SVG imports */}
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			{/* Use react-router-dom in navigation */}
			<OptionLink to="/shop">SHOP</OptionLink>
			<OptionLink to="/contact">CONTACT</OptionLink>
			{/* Ternary operator: If user is signed in, show Sign Out button.
            If user is signed out show Sign In button. Checked by looking at
            currentUser received from auth function in App.js */}
			{currentUser ? (
				<OptionLink as="div" onClick={() => auth.signOut()}>
					SIGN OUT
				</OptionLink>
			) : (
				<OptionLink to="/signin">SIGN IN</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{/* Show dropdown based on state of hidden property */}
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

// Gain access to currentUser and hidden state
// Syntactic sugar for Selectors as no need to explicitly type passing of state
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

// Pass it again since one-way data flow
export default connect(mapStateToProps)(Header);
