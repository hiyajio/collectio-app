import React from "react";
import { shallow } from "enzyme";
import Homepage from "./homepage.page";

it("should render Homepage component", () => {
	expect(shallow(<Homepage />)).toMatchSnapshot();
});
