import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Specify config for app
const config = {
	apiKey: "AIzaSyDi75vswBDV4Wx1j0ynBt2CnLcuEl1TbFo",
	authDomain: "collectio-db-b1acf.firebaseapp.com",
	databaseURL: "https://collectio-db-b1acf.firebaseio.com",
	projectId: "collectio-db-b1acf",
	storageBucket: "collectio-db-b1acf.appspot.com",
	messagingSenderId: "705001905488",
	appId: "1:705001905488:web:3b139ffee30ce540bd6055",
	measurementId: "G-GQLZZZ1FRL",
};
// Initialize firebase instance with custom config given
firebase.initializeApp(config);

// Set up data received from App to be added to Firebase Firestore (database)
export const createUserProfileDocument = async (userAuth, additionalData) => {
	// If user ID does not exist in Firestore i.e. junk data or null, return
	if (!userAuth) return;

	// If user ID does exist in database, retrieve the user ID
	const userRef = firestore.doc(`user/${userAuth.uid}`);

	// Get the snapshot or current state of that user from database for further use
	const snapShot = await userRef.get();

	// If user is not yet on database, add them to database
	if (!snapShot.exists) {
		// displayName & email already existing properties in userAuth
		const { displayName, email } = userAuth;
		// Log current time in order to store time of user creation in database
		const createdAt = new Date();

		// try-catch block since using await function
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	// Returned since we need user info for other functions throughout app
	return userRef;
};

// Export for auth and firestore access
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Initialize and export needed constants and functions for Google Sign In
const provider = new firebase.auth.GoogleAuthProvider();
// Popup every time Google Sign in is initiated will be from choosing account
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Export entire firebase as well just in case we need other functions later
export default firebase;
