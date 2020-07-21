import UserActionTypes from "./user.types";

// Initial state needed since App starts out w/o anyone logged in
const INITIAL_STATE = {
	currentUser: null,
	error: null,
};

// Any and all reducers for user goes into this and is checked using switch case
const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		// Returns user if successful and resets null for next sign in attempt
		case UserActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null,
			};
		// Resets currentUser and error to null for sign out action
		case UserActionTypes.SIGN_OUT_SUCCESS:
			return {
				...state,
				currentUser: null,
				error: null,
			};
		// Switch cases can actually stack (I did not know this was possible lol)
		// Returns error message if failure
		case UserActionTypes.SIGN_IN_FAILURE:
		case UserActionTypes.SIGN_OUT_FAILURE:
		case UserActionTypes.SIGN_UP_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
