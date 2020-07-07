import React, { Component } from "react";

// Needed for routing
import { Route } from "react-router-dom";

// Needed for redux state management
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import {
	selectIsCollectionFetching,
	selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";

// Needed to retrieve shop-data from firestore
/* import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils"; Deprecated => replaced by redux-thunk */

// Deprecated => async function calls to database moved to redux through thunk
// import { updateCollections } from "../../redux/shop/shop.actions";

// HOC for async page loading
import WithSpinner from "../../components/with-spinner/with-spinner.component";

// Bring in JSON data for menu items (Deprecated => moved to redux store)
// import shopData from "../../data/shop-data.json";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.page";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
	// Syntactic sugar: eqiuvalent to creating the constructor(){super()} combo
	/* state = {
		loading: true,
	};

	unsubsribeFromSnapshot = null;
	=> Deprecated since async database calls have been moved to redux through thunk */

	componentDidMount() {
		// Start collection fetch as soon as mount
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
		/* // Destructuring 'prop' into their specific counterpart for syntactic sugar
		const { updateCollections } = this.props;
		// Once shop page is mounted, retrive collection
		const collectionRef = firestore.collection("collections");

		/* Push snapshop (current status of database) to util function
		to be converted for front end use */
		/* collectionRef.get().then((snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		}); => Deprecated since async database calls have been moved to redux through thunk */
	}

	render() {
		// Destructuring 'prop' into its specific counterparts for syntactic sugar
		// Gain access to match from react-router-dom since nested route
		const {
			match,
			isFetchingCollections,
			isCollectionsLoaded,
		} = this.props;
		// const { loading } = this.state; => Deprecated since async database calls moved to redux

		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					// component={CollectionsOverview} => Deprecated (need async loading)
					// Return HOC showing a spinner until all data is loaded from firebase
					render={(props) => (
						<CollectionsOverviewWithSpinner
							isLoading={isFetchingCollections}
							{...props}
						/>
					)}
				/>
				{/* Dynamic nested route. Displays page depending on specific collection */}
				<Route
					path={`${match.path}/:collectionId`}
					// component={CollectionPage} => Deprecated (need async loading)
					// Return HOC showing a spinner until all data is loaded from firebase
					render={(props) => (
						<CollectionPageWithSpinner
							// Needs to have ! because Loading & Loaded are opposites
							isLoading={!isCollectionsLoaded}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

// Gain access to isFetchingCollections and isCollectionsLoaded states
const mapStateToProps = createStructuredSelector({
	isFetchingCollections: selectIsCollectionFetching,
	isCollectionsLoaded: selectIsCollectionsLoaded,
});

// Update and dispatch global redux reducer to all listeners
const mapDispatchToProps = (dispatch) => ({
	/* updateCollections: (collectionsMap) =>
		dispatch(updateCollections(collectionsMap)),
		=> Deprecated since async database calls have been moved to redux through thunk */
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

// Pass it again since one-way data flow
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
