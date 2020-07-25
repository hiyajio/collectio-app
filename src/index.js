import React from "react";
import ReactDOM from "react-dom";

// Routing using react-router-dom
import { BrowserRouter } from "react-router-dom";

// Needed for redux state management
import { Provider } from "react-redux";

// Needed for persisting store and caching it on local storage
import { PersistGate } from "redux-persist/integration/react";

// Connect serviceWorker for PWA optimization
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import App from "./App";

import { store, persistor } from "./redux/store";

ReactDOM.render(
	// Wrap App to make use of store for state management
	<Provider store={store}>
		{/* Wrap App to make use of routing */}
		<BrowserRouter>
			{/* Wrap App to make use of persisting, essentially the store given
			to it at top level from Provider gets rehydrated by this PersistGate
			to cache the cart */}
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

// Register serviceWorker for PWA optimization
serviceWorker.register();
