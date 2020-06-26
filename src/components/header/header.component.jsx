import React from "react";
// Needed for routing
import { Link } from "react-router-dom";

// Syntax for using SVG as component in react
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.styles.scss";

const Header = () => (
	<div className="header">
		<Link className="logo-container" to="/">
			{/* Use the custom React Component for SVG imports */}
			<Logo className="logo" />
		</Link>
		<div className="options">
			{/* Use react-router-dom in navigation */}
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/contact">
				CONTACT
			</Link>
			<Link className="option" to="/signin">
				SIGN IN
			</Link>
		</div>
	</div>
);

export default Header;
