import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// Logger is for redux debugging (auto console.log equivalent)
const middlewares = [logger];

/* Consolidate all reducers since funneled through rootReducer and all middlewares
effectively creating our store for state management */
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
