import React from "react";
import { shallow } from "enzyme";
import SignInSignUpPage from "./sign-in-sign-up.page";

it("should render SignInSignUpPage component", () => {
	expect(shallow(<SignInSignUpPage />)).toMatchSnapshot();
});
