import React, { useState } from "react";

// Needed for redux state management
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

import "./sign-up.styles.scss";

// Convert previous Class component to Hooks through useState
const SignUp = ({ signUpStart }) => {
	const [userCredentials, setCredentials] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { displayName, email, password, confirmPassword } = userCredentials;

	// Custom handleSubmit function (called when button is clicked)
	const handleSubmit = async (event) => {
		// Override HTML default functions for custom one
		event.preventDefault();

		// Don't do anything if passwords do not match
		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		// Start signUpStart saga
		signUpStart({
			displayName,
			email,
			password,
		});
	};

	/* Custom handleChange function (called when form fields change i.e.
    when users type in them) */
	const handleChange = (event) => {
		// Templated use-case so can use on multiple unique form fields
		const { value, name } = event.target;

		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
			<span>Sign up with your email and password</span>
			{/* Using custom handleSubmit function */}
			<form className="sign-up-form" onSubmit={handleSubmit}>
				{/* Using FormInput component for more functionality.
                    Using custom handleChange function */}
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
					label="Display Name"
					required
				/>
				<FormInput
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
					label="Email"
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					label="Password"
					required
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
					label="Confirm Password"
					required
				/>
				{/* Using CustomButton component for more functionality */}
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</div>
	);
};

// Update and dispatch global redux reducer to all listeners
const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

// Pass it again since one-way data flow
export default connect(null, mapDispatchToProps)(SignUp);
