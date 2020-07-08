import React from "react";

// Needed for redux state management
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./collections-overview.styles.scss";

// Destructuring 'prop' into their specific counterpart for syntactic sugar
const CollectionsOverview = ({ collections }) => (
	<div className="collections-overview">
		{/* Using ES6 map in order to dynamically create multiple preview items
        using JS Object. Also using ES6 spread operator as syntactic sugar
        since other props needed are just their namesake (ex: title={title}) */}
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
	</div>
);

// Gain access to collections state
// Syntactic sugar for Selectors as no need to explicitly type passing of state
const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

// Pass it again since one-way data flow
export default connect(mapStateToProps)(CollectionsOverview);
