import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

// Gained access to history, linkUrl and match from react-router-dom
// Destructuring 'prop' into their specific counterparts for syntactic sugar
const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
	// Basic dynamic routing done through using JS string interpolation
	<div
		className="menu-item"
		onClick={() => history.push(`${match.url}${linkUrl + "%20items"}`)}
	>
		<div
			className="background-image"
			// React can use inline-css but converts it to camelCase
			style={{ backgroundImage: `url(${imageUrl})` }}
		/>
		<div className="content">
			{/* With destructured props (and normal props), we can use JS
            functions on them such as toUpperCase() */}
			<h1 className="title">{title.toUpperCase()}</h1>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
);

/*  Wrap around withRouter so that we have access to the routing props that came
    from homepage. This is to ensure we do not do prop drilling or tunneling */
export default withRouter(MenuItem);
