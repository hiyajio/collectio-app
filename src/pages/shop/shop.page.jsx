import React, { Component } from "react";

// Needed for routing
import { Route } from "react-router-dom";

// Needed for redux state management
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends Component {
	// Syntactic sugar: eqiuvalent to creating the constructor(){super()} combo
	/* state = {
		loading: true,
	}; */

	componentDidMount() {
		// Start collection fetch as soon as mount
		const { fetchCollectionsStart } = this.props;
		fetchCollectionsStart();
	}

	render() {
		// Destructuring 'props' into its specific counterparts for syntactic sugar
		// Gain access to match from react-router-dom since nested route
		const { match } = this.props;

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
	}
}

// Update and dispatch global redux reducer to all listeners
const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

// Pass it again since one-way data flow
export default connect(null, mapDispatchToProps)(ShopPage);
