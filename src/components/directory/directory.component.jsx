import React from "react";

// Needed for redux state management
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item/menu-item.component";
// Bring in JSON data for menu items (Deprecated => moved to redux store)
// import directoryData from "../../data/directory.json";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import "./directory.styles.scss";

// Destructuring 'prop' into their specific counterpart for syntactic sugar
const Directory = ({ sections }) => (
	<div className="directory-menu">
		{/* Using ES6 map in order to dynamically create multiple menu items
        using JS Object. Also using ES6 spread operator as syntactic sugar
        since other props needed are just their namesake (ex: title={title}) */}
		{sections.map(({ id, ...otherDirectoryDataProps }) => (
			<MenuItem key={id} {...otherDirectoryDataProps} />
		))}
	</div>
);

// Gain access to sections state
// Syntactic sugar for Selectors as no need to explicitly type passing of state
const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

// Pass it again since one-way data flow
export default connect(mapStateToProps)(Directory);
