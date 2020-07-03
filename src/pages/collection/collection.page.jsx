import React from "react";

import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => (
	<div className="collection-page">
		<h2>CATEGORY PAGE</h2>
	</div>
);

/* Gain access to collections state. Need second prop ownProps since we are
simply getting match received from CollectionPage since it is routed */
const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
