import UserActionTypes from "./user.types";

// Action for setting current user (know who's logging in)
// export const setCurrentUser = (user) => ({
/* Simply sets type and payload so reducer knows what action it is and
    does the appropriate state change */
// type: UserActionTypes.SET_CURRENT_USER,
// payload: user,
// }); => Deprecated for redux-saga handling of google + email sign in

// Action for setting up Google Sign In through sagas
export const googleSignInStart = () => ({
	type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

// Action that returns us the user and tells us we succeeded in Google Sign In
export const signInSuccess = (user) => ({
	type: UserActionTypes.SIGN_IN_SUCCESS,
	payload: user,
});

// Action that returns us the error and tells us we failed in Google Sign In
export const signInFailure = (error) => ({
	type: UserActionTypes.SIGN_IN_FAILURE,
	payload: error,
});

// Action for setting up Email Sign In through sagas
export const emailSignInStart = (emailAndPassword) => ({
	type: UserActionTypes.EMAIL_SIGN_IN_START,
	payload: emailAndPassword,
});
