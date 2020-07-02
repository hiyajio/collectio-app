import { UserActionTypes } from "./user.types";

// Initial state needed since App starts out w/o anyone logged in
const INITIAL_STATE = {
	currentUser: null,
};

// Any and all reducers for user goes into this and is checked using switch case
const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
