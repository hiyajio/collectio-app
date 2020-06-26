import React, { Component } from "react";

import MenuItem from "../menu-item/menu-item.component";
import data from "../../data/homepage.json";
import "./directory.styles.scss";

class Directory extends Component {
	render() {
		return (
			<div className="directory-menu">
				{data.map(({ title, imageUrl, id }) => (
					<MenuItem
						key={id}
						title={title.toUpperCase()}
						imageUrl={imageUrl}
					/>
				))}
			</div>
		);
	}
}

export default Directory;
