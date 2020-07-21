import { createStore, applyMiddleware } from "redux";

// Needed for debugging redux
import logger from "redux-logger";

// Needed to use redux for async actions
// import thunk from "redux-thunk"; => Deprecated for redux-saga

// Needed to use redux for async actions
import createSageMiddleware from "redux-saga";

// Needed for persisting store and caching it on local storage
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSageMiddleware();

// If we create a function action-reducer, thunk intercepts that and uses redux-thunk
const middlewares = [sagaMiddleware];

// Production build optimization - only show redux-logger logs in development
if (process.env.NODE_ENV === "development") {
	// Logger is for redux debugging (auto console.log equivalent)
	middlewares.push(logger);
}

/* Consolidate all reducers since funneled through rootReducer and all middlewares
effectively creating our store for state management */
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Run all sagas needed from root-saga on app start up
sagaMiddleware.run(rootSaga);

// Create new persisted version of store for caching to local storage
export const persistor = persistStore(store);

export default { store, persistor };
