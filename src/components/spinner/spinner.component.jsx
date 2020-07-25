import React from "react";

// Needed for styled-components styling
import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

// Refactored Spinner out of WithSpinner so we can use the non-HOC version for page lazy-loading
const Spinner = () => (
	<SpinnerOverlay>
		<SpinnerContainer />
	</SpinnerOverlay>
);

export default Spinner;
