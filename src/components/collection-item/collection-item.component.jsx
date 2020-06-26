import React from "react";

import "./collection-item.styles.scss";

// Destructuring 'prop' into their specific counterparts for syntactic sugar
const CollectionItem = ({ id, name, price, imageUrl }) => (
	<div className="collection-item">
		<div
			className="image"
			// React can use inline-css but converts it to camelCase
			style={{ backgroundImage: `url(${imageUrl})` }}
		/>
		<div className="collection-footer">
			<span className="name">{name}</span>
			<span className="price">${price}</span>
		</div>
	</div>
);

export default CollectionItem;
