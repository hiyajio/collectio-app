import React, { Component } from "react";

// Needed for routing
import { Switch, Route, Redirect } from "react-router-dom";

// Needed for redux state management
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.page";
import ShopPage from "./pages/shop/shop.page";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.page";
import CheckoutPage from "./pages/checkout/checkout.page";

// Bring in setCurrentUser action
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// Need to turn into Component since need to keep track of state for OAuth
class App extends Component {
	// Initialize variable for disconnecting event listener
	unsubcribeFromAuth = null;

	/* Custom componentDidMount function (called when component successfully
	loads after getting called) */
	componentDidMount() {
		const { setCurrentUser } = this.props;
		/* Used for user persistence. Once signed in, if they did not sign out,
		next visit they will still be signed in. Also store user in database. */
		this.unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			// If successfully retrieved or created user in database
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				/* Backend to frontend transfer: Using the current state or
				"Snapshot" of that user, we simple set the state of
				currentUser to it */
				userRef.onSnapshot((snapShot) => {
					// Update current state of app as well
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			} else {
				/* Checks for no user and sets it to null i.e. no one signed in
				Update current state of app as well */
				setCurrentUser(userAuth);
			}
		});
	}

	// Custom componentWillUnmount function for unsubscribing event listener
	componentWillUnmount() {
		// Makes sure no data leaks happen and also allows stops user persistence
		this.unsubcribeFromAuth();
	}

	render() {
		return (
			<div>
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
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<SignInSignUpPage />
							)
						}
					/>
				</Switch>
			</div>
		);
	}
}

// Gain access to currentUser state
// Syntactic sugar for Selectors as no need to explicitly type passing of state
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

// Update and dispatch global redux reducer to all listeners
const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// Pass it again since one-way data flow
export default connect(mapStateToProps, mapDispatchToProps)(App);
