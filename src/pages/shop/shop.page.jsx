import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview";

// Bring in JSON data for shop items
import shopData from "../../data/shop-data.json";

const ShopPage = () => (
	<div className="shop-page">
		{/* Using ES6 map in order to dynamically create multiple preview items
        using JSON data. Also using ES6 spread operator as syntactic sugar
        since other props needed are just their namesake (ex: title={title}) */}
		{shopData.map(({ id, ...otherShopDataProps }) => (
			<CollectionPreview key={id} {...otherShopDataProps} />
		))}
	</div>
);

export default ShopPage;
