import UserActionTypes from "./user.types";

// Initial state needed since App starts out w/o anyone logged in
const INITIAL_STATE = {
	currentUser: null,
	error: null,
};

// Any and all reducers for user goes into this and is checked using switch case
const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		// Switch cases can actually stack (I did not know this was possible lol)
		// Returns user if successful and resets null for next sign in attempt
		case UserActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null,
			};
		// Returns error message if failure
		case UserActionTypes.SIGN_IN_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
