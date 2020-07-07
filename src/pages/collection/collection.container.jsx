// Needed for redux state management
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Needed for refactoring to make code HOC chaining more readable
import { compose } from "redux";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

// HOC for async page loading
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionPage from "../collection/collection.page";

// Gain access to isLoading states
const mapStateToProps = createStructuredSelector({
	/* This gets the inverse which was the original functionality since Loaded is
    the opposite of Loading. By getting state, we bypass the need to use a double bang */
	isLoading: (state) => !selectIsCollectionsLoaded(state),
});

// Evaluated from right to left
const CollectionPageContainer = compose(
	// Pass it again since one-way data flow
	connect(mapStateToProps),
	WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
