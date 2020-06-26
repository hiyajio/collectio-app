import React from "react";

import "./custom-button.styles.scss";

/* Destructuring 'prop' into their specific counterparts and spread operator
for syntactic sugar */
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
	<button
		// Checks if it is Google Sign In button. If it is, add to styling
		className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
