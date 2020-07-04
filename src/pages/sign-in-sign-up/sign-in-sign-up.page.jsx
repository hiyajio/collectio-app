import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { SignInSignUpContainer } from "./sign-in-sign-up.styles";

// import "./sign-in-sign-up.styles.scss";

const SignInSignUpPage = () => (
	<SignInSignUpContainer>
		<SignIn />
		<SignUp />
	</SignInSignUpContainer>
);

export default SignInSignUpPage;
