import React from "react";

import "./custom-button.styles.scss";

/* Destructuring 'prop' into their specific counterparts and spread operator
for syntactic sugar */
const CustomButton = ({ children, ...otherProps }) => (
	<button className="custom-button" {...otherProps}>
		{children}
	</button>
);

export default CustomButton;
