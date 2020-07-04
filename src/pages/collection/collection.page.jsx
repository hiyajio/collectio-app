import React from "react";

// Needed for redux state management
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

// Needed for styled-components styling
import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer,
} from "./collection.styles";

// import "./collection.styles.scss"; => Deprecated (converted sass to styled-components)

// Destructuring 'prop' into their specific counterpart for syntactic sugar
const CollectionPage = ({ collection }) => {
	// Further destructuring to gain access to specific props
	const { title, items } = collection;
	return (
		<CollectionPageContainer>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItemsContainer>
				{/* When mapping, a key is needed to tell React (ReactDOM)
				which component is which */}
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
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
