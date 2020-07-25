import React from "react";

// Refactored Spinner out of WithSpinner so we can use the non-HOC version for page lazy-loading
import Spinner from "../spinner/spinner.component";

// HOC: Give it component to return same component w "attachments"/"enhancements"
const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
	// Ternary operator: If loading, show spinner, else, show actual component
	return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
