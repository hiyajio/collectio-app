import React from "react";

// Needed for routing
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component.jsx";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";

function App() {
	return (
		<div>
			{/* By placing Header above Switch, this ensure it is only rendered once
			and will stay regardless of which page is chosen*/}
			<Header />
			{/* Switch is its namesake. Only the first one we find that matches path
			will be rendered. Think of it as a switch case or an if statement with
			continue*/}
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
