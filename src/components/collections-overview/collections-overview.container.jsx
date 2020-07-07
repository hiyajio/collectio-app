// Needed for redux state management
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Needed for refactoring to make code HOC chaining more readable
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

// HOC for async page loading
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

// Gain access to isLoading states
const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching,
});

// Evaluated from right to left
const CollectionsOverviewContainer = compose(
	// Pass it again since one-way data flow
	connect(mapStateToProps),
	WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
