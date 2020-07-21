import React, { useEffect } from "react";

// Needed for firebase authentication and database
import "firebase/firestore";
import "firebase/auth";

// Needed for routing
import { Switch, Route, Redirect } from "react-router-dom";

// Needed for redux state management
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { GlobalStyle } from "./global.styles";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.page";
import ShopPage from "./pages/shop/shop.page";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.page";
import CheckoutPage from "./pages/checkout/checkout.page";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

// Add Hooks through useEffect (== componentDidMount)
const App = ({ checkUserSession, currentUser }) => {
	// Need to put checkUserSession in array so not called (re-rendered) twice
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div>
			{/* User styled-components for global app-level styling */}
			<GlobalStyle />
			{/* By placing Header above Switch, this ensure it is only rendered once
				and will stay regardless of which page is chosen */}
			<Header />
			{/* Switch is its namesake. Only the first one we find that matches path
				will be rendered. Think of it as a switch case or chained if-else
				statements */}
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/checkout" component={CheckoutPage} />
				<Route
					exact
					path="/signin"
					/* If user logged in already, deny access to sign in page.
						Also, redirect to home page if once signed in */
					render={() =>
						currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
					}
				/>
			</Switch>
		</div>
	);
};

// Gain access to currentUser state
// Syntactic sugar for Selectors as no need to explicitly type passing of state
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

// Update and dispatch global redux reducer to all listeners
const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

// Pass it again since one-way data flow
export default connect(mapStateToProps, mapDispatchToProps)(App);
