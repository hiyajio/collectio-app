import React from "react";

// Needed for styled-components styling
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

// HOC: Give it component to return same component w "attachments"/"enhancements"
const WithSpinner = (WrappedComponent) => {
	// Ternary operator: If loading, show spinner, else, show actual component
	const Spinner = ({ isLoading, ...otherProps }) => {
		return isLoading ? (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		) : (
			<WrappedComponent {...otherProps} />
		);
	};
	return Spinner;
};

export default WithSpinner;
