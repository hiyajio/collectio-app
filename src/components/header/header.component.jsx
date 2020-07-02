import React from "react";

// Needed for routing
import { Link } from "react-router-dom";
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

import "./header.styles.scss";

// Destructuring 'prop' into their specific counterparts for syntactic sugar
const Header = ({ currentUser, hidden }) => (
	<div className="header">
		<Link className="logo-container" to="/">
			{/* Use the custom React Component for SVG imports */}
			<Logo className="logo" />
		</Link>
		<div className="options">
			{/* Use react-router-dom in navigation */}
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/contact">
				CONTACT
			</Link>
			{/* Ternary operator: If user is signed in, show Sign Out button.
            If user is signed out show Sign In button. Checked by looking at
            currentUser received from auth function in App.js */}
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className="option" to="/signin">
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</div>
		{/* Show dropdown based on state of hidden property */}
		{hidden ? null : <CartDropdown />}
	</div>
);

// Gain access to currentUser and hidden state
// Syntactic sugar for Selectors as no need to explicitly type passing of state
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

// Pass it again since one-way data flow
export default connect(mapStateToProps)(Header);
