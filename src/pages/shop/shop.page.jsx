import React from "react";

// Bring in JSON data for menu items (Deprecated => moved to redux store)
// import shopData from "../../data/shop-data.json";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = () => (
	<div className="shop-page">
		<CollectionsOverview />
	</div>
);

export default ShopPage;
