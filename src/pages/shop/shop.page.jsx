// Needed new imports of lazy and Suspense (HOC) for page lazy-loading
import React, { useEffect, lazy, Suspense } from "react";

// Needed for routing
import { Route } from "react-router-dom";

// Needed for redux state management
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

// New import - will be fallback component as we retrieve page lazily
import Spinner from "../../components/spinner/spinner.component";

// New import - HOC for catching error if async-await page lazy-loading throws one
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

// DEPRECATED => imports must be replaced by lazy import in order to enable lazy-loading
// import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
// import CollectionPageContainer from "../collection/collection.container";

// React way of lazy-loading images (remember: async, so must be used in conjuction with Suspense which awaits)
const CollectionsOverviewContainer = lazy(() =>
	import(
		"../../components/collections-overview/collections-overview.container"
	)
);
const CollectionPageContainer = lazy(() =>
	import("../collection/collection.container")
);

// Add Hooks through useEffect (== componentDidMount)
const ShopPage = ({ fetchCollectionsStart, match }) => {
	// Need to put fetchCollectionsStart in array so not called (re-rendered) twice
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<div className="shop-page">
			{/* Suspense and lazy imports are async-await. ErrorBoundary is try-catch block for error*/}
			<ErrorBoundary>
				{/* Suspense - "await" equivalent with fallback component as it loads*/}
				<Suspense fallback={<Spinner />}>
					{/* Each lazy-loading import is essentially "async" so must be w/in "await" or Suspense*/}
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
				</Suspense>
			</ErrorBoundary>
		</div>
	);
};

// Update and dispatch global redux reducer to all listeners
const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

// Pass it again since one-way data flow
export default connect(null, mapDispatchToProps)(ShopPage);
