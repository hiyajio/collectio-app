import React from "react";

// Needed for redux state management
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

// Destructuring 'prop' into their specific counterparts for syntactic sugar
const CollectionItem = ({ item, addItem }) => {
	// Further destructuring to gain access to specific props
	const { name, price, imageUrl } = item;
	return (
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
			{/* Add item to cart when button is clicked */}
			<CustomButton onClick={() => addItem(item)} inverted>
				Add to cart
			</CustomButton>
		</div>
	);
};

// Update and dispatch global redux reducer to all listeners
const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

// Pass it again since one-way data flow
export default connect(null, mapDispatchToProps)(CollectionItem);
