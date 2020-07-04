import React, { Component } from "react";

// Needed for routing
import { Route } from "react-router-dom";

// Needed for redux state management
import { connect } from "react-redux";

// Needed to retrieve shop-data from firestore
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

// Bring in JSON data for menu items (Deprecated => moved to redux store)
// import shopData from "../../data/shop-data.json";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.page";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
	state = {
		loading: true,
	};

	unsubsribeFromSnapshot = null;

	componentDidMount() {
		// Destructuring 'prop' into their specific counterpart for syntactic sugar
		const { updateCollections } = this.props;
		// Once shop page is mounted, retrive collection
		const collectionRef = firestore.collection("collections");

		/* Push snapshop (current status of database) to util function
		to be converted for front end use */
		collectionRef.get().then((snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});
	}

	render() {
		// Destructuring 'prop' into their specific counterpart for syntactic sugar
		// Gain access to match from react-router-dom since nested route
		const { match } = this.props;
		const { loading } = this.state;

		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					// component={CollectionsOverview}
					render={(props) => (
						<CollectionsOverviewWithSpinner
							isLoading={loading}
							{...props}
						/>
					)}
				/>
				{/* Dynamic nested route. Displays page depending on specific collection */}
				<Route
					path={`${match.path}/:collectionId`}
					// component={CollectionPage}
					render={(props) => (
						<CollectionPageWithSpinner
							isLoading={loading}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

// Update and dispatch global redux reducer to all listeners
const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) =>
		dispatch(updateCollections(collectionsMap)),
});

// Pass it again since one-way data flow
export default connect(null, mapDispatchToProps)(ShopPage);
