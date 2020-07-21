import UserActionTypes from "./user.types";

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

// Action that fires local persistence check for sign in
export const checkUserSession = () => ({
	type: UserActionTypes.CHECK_USER_SESSION,
});
