import { createStore, applyMiddleware } from "redux";

// Needed for debugging redux
import logger from "redux-logger";

// Needed for persisting store and caching it on local storage
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

// Logger is for redux debugging (auto console.log equivalent)
const middlewares = [logger];

/* Consolidate all reducers since funneled through rootReducer and all middlewares
effectively creating our store for state management */
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Create new persisted version of store for caching to local storage
export const persistor = persistStore(store);

export default { store, persistor };
