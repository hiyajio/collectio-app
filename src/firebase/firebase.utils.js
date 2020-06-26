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
