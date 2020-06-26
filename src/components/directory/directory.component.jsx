import React from "react";

import MenuItem from "../menu-item/menu-item.component";
// Bring in JSON data for menu items
import directoryData from "../../data/directory.json";

import "./directory.styles.scss";

const Directory = () => (
	<div className="directory-menu">
		{/* Using ES6 map in order to dynamically create multiple menu items
        using JSON data. Also using ES6 spread operator as syntactic sugar
        since other props needed are just their namesake (ex: title={title}) */}
		{directoryData.map(({ id, ...otherDirectoryDataProps }) => (
			<MenuItem key={id} {...otherDirectoryDataProps} />
		))}
	</div>
);

export default Directory;
