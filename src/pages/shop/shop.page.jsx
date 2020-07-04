import React, { Component } from "react";

// Needed for routing
import { Route } from "react-router-dom";

// Needed to retrieve shop-data from firestore
import {
	firestore,
	convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

// Bring in JSON data for menu items (Deprecated => moved to redux store)
// import shopData from "../../data/shop-data.json";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.page";

class ShopPage extends Component {
	unsubsribeFromSnapshot = null;

	componentDidMount() {
		// Once shop page is mounted, retrive collection
		const collectionRef = firestore.collection("collections");

		/* Push snapshop (current status of database) to util function
		to be converted for front end use */
		this.unsubsribeFromSnapshot = collectionRef.onSnapshot(
			async (snapshot) => {
				const collectionsMap = convertCollectionSnapshotToMap(snapshot);
				console.log(collectionsMap);
			}
		);
	}

	render() {
		// Destructuring 'prop' into their specific counterpart for syntactic sugar
		// Gain access to match from react-router-dom since nested route
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					component={CollectionsOverview}
				/>
				{/* Dynamic nested route. Displays page depending on specific collection */}
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPage}
				/>
			</div>
		);
	}
}

export default ShopPage;
