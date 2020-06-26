import React from "react";

// Needed for routing
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

function App() {
	return (
		<div>
			{/* Switch is its namesake. Only the first one we find that matches path
			will be rendered. Think of it as a switch case or an if statement with
			continue*/}
			<Switch>
				<Route exact path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
