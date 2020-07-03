import { combineReducers } from "redux";

// Needed for persisting store and caching it on local storage
import { persistReducer } from "redux-persist";

// Point storage to be used to local storage from window
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
	// key: At what point within our reducer do you want to start storing
	key: "root",
	// Point it to selected storage from import
	storage,
	/* What reducers should we persist (user is not part since
    Firebase is handling caching and persisting for that) */
	whitelist: ["cart"],
};

// All the root reducer does is simply consolidate all reducers used in App
const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
});

// Export the persisting settings + the root reducer
export default persistReducer(persistConfig, rootReducer);
