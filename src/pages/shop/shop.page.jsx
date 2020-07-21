import React, { useEffect } from "react";

// Needed for routing
import { Route } from "react-router-dom";

// Needed for redux state management
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

// Add Hooks through useEffect (== componentDidMount)
const ShopPage = ({ fetchCollectionsStart, match }) => {
	// Need to put fetchCollectionsStart in array so not called (re-rendered) twice
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<div className="shop-page">
			<Route
				exact
				path={`${match.path}`}
				// Return HOC showing a spinner until all data is loaded from firebase
				component={CollectionsOverviewContainer}
			/>
			{/* Dynamic nested route. Displays page depending on specific collection */}
			<Route
				path={`${match.path}/:collectionId`}
				// Return HOC showing a spinner until all data is loaded from firebase
				component={CollectionPageContainer}
			/>
		</div>
	);
};

// Update and dispatch global redux reducer to all listeners
const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

// Pass it again since one-way data flow
export default connect(null, mapDispatchToProps)(ShopPage);
