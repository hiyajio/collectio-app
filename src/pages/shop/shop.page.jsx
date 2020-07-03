import React from "react";

// Needed for routing
import { Route } from "react-router-dom";

// Bring in JSON data for menu items (Deprecated => moved to redux store)
// import shopData from "../../data/shop-data.json";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.page";

// Destructuring 'prop' into their specific counterpart for syntactic sugar
// Gain access to match from react-router-dom since nested route
const ShopPage = ({ match }) => (
	<div className="shop-page">
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
		{/* Dynamic nested route. Displays page depending on specific collection */}
		<Route
			path={`${match.path}/:collectionId`}
			component={CollectionPage}
		/>
	</div>
);

export default ShopPage;
