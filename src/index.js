import React from "react";
import ReactDOM from "react-dom";

// Routing using react-router-dom
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

ReactDOM.render(
	// Wrap App to make use of routing
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
