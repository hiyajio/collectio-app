import React from "react";

// Needed for redux state management
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

// Destructuring 'prop' into their specific counterpart for syntactic sugar
const CollectionPage = ({ collection }) => {
	// Further destructuring to gain access to specific props
	const { title, items } = collection;
	return (
		<div className="collection-page">
			<h2 className="title">{title}</h2>
			<div className="items">
				{/* When mapping, a key is needed to tell React (ReactDOM)
				which component is which */}
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

/* Gain access to collections state. Need second prop ownProps since we are
simply getting match received from CollectionPage since it is routed */
const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

// Pass it again since one-way data flow
export default connect(mapStateToProps)(CollectionPage);
