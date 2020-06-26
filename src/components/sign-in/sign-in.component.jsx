import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

// Component is needed since we need to take note of state
class SignIn extends Component {
	// Class component declaration and use
	constructor(props) {
		// Used for passing props
		super(props);

		// Used to template state
		this.state = {
			email: "",
			password: "",
		};
	}

	// Custom handleSubmit function (called when button is clicked)
	handleSubmit = (event) => {
		// Override HTML default functions for custom one
		event.preventDefault();

		this.setState({ email: "", password: "" });
	};

	/* Custom handleChange function (called when form fields change i.e.
    when users type in them) */
	handleChange = (event) => {
		// Templated use-case so can use on multiple unique form fields
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				{/* Using custom handleSubmit function */}
				<form onSubmit={this.handleSubmit}>
					{/* Using FormInput component for more functionality.
                    Using custom handleChange function */}
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="email"
						required
					/>
					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label="password"
						required
					/>
					{/* Using CustomButton component for more functionality */}
					<CustomButton type="submit">Sign In</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;