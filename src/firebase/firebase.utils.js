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

/* Set up function to programatically add new collection and local documents to
Firebase Firestore (database) */
export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	// Get a collection reference from key received
	const collectionRef = firestore.collection(collectionKey);

	/* Batch is used to ship and set everything in one instance compared to
	doing it one at a time as it is a more secure data transfer */
	const batch = firestore.batch();

	// Set new documents in collection for database
	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();

		// Batch commit without pointer reference
		// batch.set(newDocRef, obj);

		// Use docRef ID received from firestore as collectionID to point back
		batch.set(newDocRef, { obj, documentID: newDocRef.id });
	});

	// Commit the batch and send confirmation back that it did
	return await batch.commit();
};

// Set up function to retrive collection from firestore and fix it for front end use
export const convertCollectionSnapshotToMap = (collections) => {
	// Map through all the docs (shop categories)
	const transformedCollection = collections.docs.map((doc) => {
		// Retrive and assign title and items for front end use
		const { obj } = doc.data();
		const title = obj.title;
		const items = obj.items;

		return {
			/* Programmatically create a URI to serve as routeName. Intentionally
			did not bring up routeName to database for database industry standards
			(why clutter database w/ routeName if database would be used by mobile
			in the future? - unnecessary data) */
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		};
	});

	// Create JS Object wherein the key is the title and is assigned to collection
	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
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
