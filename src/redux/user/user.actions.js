import UserActionTypes from "./user.types";

// Action for setting up Google Sign In through sagas
export const googleSignInStart = () => ({
	type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

// Action that returns the user for setting up Email Sign In through sagas
export const emailSignInStart = (emailAndPassword) => ({
	type: UserActionTypes.EMAIL_SIGN_IN_START,
	payload: emailAndPassword,
});

// Action that returns the user and tells us we succeeded in signing in
export const signInSuccess = (user) => ({
	type: UserActionTypes.SIGN_IN_SUCCESS,
	payload: user,
});

// Action that returns the error and tells us we failed in signing in
export const signInFailure = (error) => ({
	type: UserActionTypes.SIGN_IN_FAILURE,
	payload: error,
});

// Action that fires local persistence check if user has already signed in before
export const checkUserSession = () => ({
	type: UserActionTypes.CHECK_USER_SESSION,
});

// Action that fires sign out method through sagas
export const signOutStart = () => ({
	type: UserActionTypes.SIGN_OUT_START,
});

// Action that tells us we succeeded in signing out
export const signOutSuccess = () => ({
	type: UserActionTypes.SIGN_OUT_SUCCESS,
});

// Action that returns the error and tells us we failed in signing out
export const signOutFailure = (error) => ({
	type: UserActionTypes.SIGN_OUT_FAILURE,
	payload: error,
});

// Action that fires sign up method through sagas
export const signUpStart = (userCredentials) => ({
	type: UserActionTypes.SIGN_UP_START,
	payload: userCredentials,
});

// Action that returns the user + data and tells us we succeeded in signing up
export const signUpSuccess = ({ user, additionalData }) => ({
	type: UserActionTypes.SIGN_UP_SUCCESS,
	payload: { user, additionalData },
});

// Action that returns the error and tells us we failed in signing up
export const signUpFailure = (error) => ({
	type: UserActionTypes.SIGN_UP_FAILURE,
	payload: error,
});
