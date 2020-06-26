import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

// Gained access to history, linkUrl and match from react-router-dom
const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
	// Basic dynamic routing done through using JS string interpolation
	<div
		className="menu-item"
		onClick={() => history.push(`${match.url}${linkUrl}`)}
	>
		{/* React can use inline-css but converts it to camelCase */}
		<div
			className="background-image"
			style={{ backgroundImage: `url(${imageUrl})` }}
			// React can use inline-css but converts it to camelCase
		/>
		<div className="content">
			<h1 className="title">{title}</h1>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
);

/*  Wrap around withRouter so that we have access to the routing props that came
    from homepage. This is to ensure we do not do prop drilling or tunneling */
export default withRouter(MenuItem);
