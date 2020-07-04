import React from "react";

import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

// Destructuring 'prop' into their specific counterparts for syntactic sugar
const CollectionPreview = ({ title, items, history, match, routeName }) => (
	<div className="collection-preview">
		{/* With destructured props (and normal props), we can use JS
        functions on them such as toUpperCase() */}
		<h1 onClick={() => history.push(`${match.path}/${routeName}`)}>
			<span className="title">{title.toUpperCase()}</span>
		</h1>
		<div className="preview">
			{/* Using ES6 filter to limit render by 4 since it's only a preview.
            Using ES6 map in order to dynamically create multiple preview items
            using JSON data. Also using ES6 spread operator as syntactic sugar
            since other props needed are just their namesake (ex: title={title}) */}
			{items
				.filter((item, index) => index < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</div>
	</div>
);

export default withRouter(CollectionPreview);
