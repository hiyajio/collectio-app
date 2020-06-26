import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherFormInputProps }) => (
	<div className="group">
		<input
			className="form-input"
			onChange={handleChange}
			{...otherFormInputProps}
		/>
		{label ? (
			<label
				className={`{otherProps.value.length ? 'shrink' : ''} form-input-label`}
			>
				{label}
			</label>
		) : null}
	</div>
);

export default FormInput;
