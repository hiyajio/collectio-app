// Needed new imports of lazy and Suspense (HOC) for page lazy-loading
import React, { lazy, Suspense } from "react";

// Needed for redux state management
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

// Needed for styled-components styling
import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer,
} from "./collection.styles";

// New import - will be fallback component as we retrieve page lazily
import Spinner from "../../components/spinner/spinner.component";

// DEPRECATED => imports must be replaced by lazy import in order to enable lazy-loading
// import CollectionItem from "../../components/collection-item/collection-item.component";
const CollectionItem = lazy(() =>
	import("../../components/collection-item/collection-item.component")
);

// Destructuring 'prop' into their specific counterpart for syntactic sugar
const CollectionPage = ({ collection }) => {
	// UNCOMMENT BELOW to test ErrorBoundary feature
	// throw Error;

	// Further destructuring to gain access to specific props
	const { title, items } = collection;
	return (
		<CollectionPageContainer>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItemsContainer>
				{/* When mapping, a key is needed to tell React (ReactDOM)
				which component is which */}
				{items.map((item) => (
					<Suspense fallback={<Spinner />}>
						{/* Each lazy-loading import is essentially "async" so must be w/in "await" or Suspense*/}
						<CollectionItem key={item.id} item={item} />
					</Suspense>
				))}
			</CollectionItemsContainer>
		</CollectionPageContainer>
	);
};

/* Gain access to collections state. Need second prop ownProps since we are
simply getting match received from CollectionPage since it is routed */
const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

// Pass it again since one-way data flow
export default connect(mapStateToProps)(CollectionPage);
