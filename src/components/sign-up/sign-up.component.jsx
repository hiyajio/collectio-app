import React, { Component } from "react";

// Needed for redux state management
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

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

		const { signUpStart } = this.props;
		const { displayName, email, password, confirmPassword } = this.state;

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

// Update and dispatch global redux reducer to all listeners
const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

// Pass it again since one-way data flow
export default connect(null, mapDispatchToProps)(SignUp);
