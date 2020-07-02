import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

// All the root reducer does is simply consolidate all reducers used in App
export default combineReducers({ user: userReducer });
