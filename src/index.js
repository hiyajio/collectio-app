import React from "react";
import ReactDOM from "react-dom";

// Routing using react-router-dom
import { BrowserRouter } from "react-router-dom";

// Needed for redux state management
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

import store from "./redux/store";

ReactDOM.render(
	// Wrap App to make use of store for state management
	<Provider store={store}>
		{/* Wrap App to make use of routing */}
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
