import React from "react";

import "./custom-button.styles.scss";

/* Destructuring 'prop' into their specific counterparts and spread operator
for syntactic sugar */
const CustomButton = ({
	children,
	isGoogleSignIn,
	inverted,
	...otherProps
}) => (
	<button
		// Checks if it is Google Sign In or Inverted button. If it is, add to styling
		className={`${inverted ? "inverted" : ""} ${
			isGoogleSignIn ? "google-sign-in" : ""
		} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
