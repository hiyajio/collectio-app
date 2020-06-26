import React, { Component } from "react";

// Needed for routing
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.page";
import ShopPage from "./pages/shop/shop.page";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.page";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// Need to turn into Component since need to keep track of state for OAuth
class App extends Component {
	// Class component declaration and use
	constructor() {
		// Used for passing props
		super();

		// Used to template state
		this.state = {
			currentUser: null,
		};
	}

	// Initialize variable for disconnecting event listener
	unsubcribeFromAuth = null;

	/* Custom componentDidMount function (called when component successfully
	loads after getting called) */
	componentDidMount() {
		/* Used for user persistence. Once signed in, if they did not sign out,
		next visit they will still be signed in. Also store user in database. */
		this.unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			// If successfully retrieved or created user in database
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				/* Backend to frontend transfer: Using the current state or
				"Snapshot" of that user, we simple set the state of
				currentUser to it. */
				userRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							// Store user id, displayName and all other info
							id: snapShot.id,
							...snapShot.data(),
						},
					});
				});
			} else {
				// Checks for no user and sets it to null i.e. no one signed in
				this.setState({ currentUser: userAuth });
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
				and will stay regardless of which page is chosen*/}
				<Header currentUser={this.state.currentUser} />
				{/* Switch is its namesake. Only the first one we find that matches path
				will be rendered. Think of it as a switch case or an if statement with
				continue*/}
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
