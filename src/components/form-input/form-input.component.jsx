import React from "react";

import "./form-input.styles.scss";

/* Destructuring 'prop' into their specific counterparts and spread operator
for syntactic sugar */
const FormInput = ({ handleChange, label, ...otherProps }) => (
	<div className="group">
		{/* Need to pass handleChange since input is used for it
        (gets form field changes)*/}
		<input className="form-input" onChange={handleChange} {...otherProps} />
		{/* Ternary Operator: If there's a label to input, create it and use
        CSS animation, else, null */}
		{label ? (
			<label
				className={`{otherProps.value.length ? 'shrink' : ''} form-input-label`}
			>
				{label.toUpperCase()}
			</label>
		) : null}
	</div>
);

export default FormInput;
