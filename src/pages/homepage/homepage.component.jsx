import React from "react";

import Directory from "../../components/directory/directory.component.jsx";

import "./homepage.styles.scss";

// HomePage => Directory (separated into components for better management)
const HomePage = () => (
	<div className="homepage">
		<Directory />
	</div>
);

export default HomePage;
