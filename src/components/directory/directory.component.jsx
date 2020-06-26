import React from "react";

import MenuItem from "../menu-item/menu-item.component";
// Bring in JSON data for menu items
import data from "../../data/homepage.json";

import "./directory.styles.scss";

const Directory = () => (
	<div className="directory-menu">
		{/* Using ES6 map in order to dynamically create multiple menu items
        using JSON data. Also using ES6 spread operator as syntactic sugar
        since other props needed are just their namesake (ex: title={title}) */}
		{data.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</div>
);

export default Directory;
