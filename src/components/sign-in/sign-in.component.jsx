import React, { useState } from "react";

// Needed for redux state management
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
	googleSignInStart,
	emailSignInStart,
} from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

// Convert previous Class component to Hooks through useState
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const { email, password } = userCredentials;
	// Custom handleSubmit function (called when button is clicked)
	const handleSubmit = async (event) => {
		// Override HTML default functions for custom one
		event.preventDefault();

		// Start emailSignInStart saga
		emailSignInStart(email, password);
	};

	/* Custom handleChange function (called when form fields change i.e.
    when users type in them) */
	const handleChange = (event) => {
		// Templated use-case so can use on multiple unique form fields
		const { value, name } = event.target;

		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			{/* Using custom handleSubmit function */}
			<form onSubmit={handleSubmit}>
				{/* Using FormInput component for more functionality.
                    Using custom handleChange function */}
				<FormInput
					name="email"
					type="email"
					value={email}
					handleChange={handleChange}
					label="email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={password}
					handleChange={handleChange}
					label="password"
					required
				/>
				<div className="buttons">
					{/* Using CustomButton component for more functionality */}
					<CustomButton type="submit">Sign In</CustomButton>
					{/* Using signInWithGoogle initialize in utils for OAuth */}
					<CustomButton
						type="button"
						onClick={googleSignInStart}
						isGoogleSignIn
					></CustomButton>
				</div>
			</form>
		</div>
	);
};

// Update and dispatch global redux reducer to all listeners
const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});

// Pass it again since one-way data flow
export default connect(null, mapDispatchToProps)(SignIn);
