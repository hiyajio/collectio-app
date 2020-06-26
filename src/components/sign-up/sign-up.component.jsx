import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// Needed functions for creating new user in database
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

// Component is needed since we need to take note of state
class SignUp extends Component {
	// Class component declaration and use
	constructor() {
		// Used for passing props
		super();

		// Used to template state
		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	// Custom handleSubmit function (called when button is clicked)
	handleSubmit = async (event) => {
		// Override HTML default functions for custom one
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		// Don't do anything if passwords do not match
		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		// try-catch block since using await function
		try {
			// Create user given the email and password from form field
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			// Create entire Profile using displayName
			await createUserProfileDocument(user, { displayName });

			// Reset form field on App since successful sign up
			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (error) {
			console.error(error);
		}
	};

	/* Custom handleChange function (called when form fields change i.e.
    when users type in them) */
	handleChange = (event) => {
		// Templated use-case so can use on multiple unique form fields
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with your email and password</span>
				{/* Using custom handleSubmit function */}
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					{/* Using FormInput component for more functionality.
                    Using custom handleChange function */}
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						label="Display Name"
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						label="Password"
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={this.handleChange}
						label="Confirm Password"
						required
					/>
					{/* Using CustomButton component for more functionality */}
					<CustomButton type="submit">SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
