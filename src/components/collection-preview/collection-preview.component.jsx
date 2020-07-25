// Needed new imports of lazy and Suspense (HOC) for page lazy-loading
import React, { lazy, Suspense } from "react";

// Needed for routing
import { withRouter } from "react-router-dom";

import "./collection-preview.styles.scss";

// New import - will be fallback component as we retrieve page lazily
import Spinner from "../../components/spinner/spinner.component";

// DEPRECATED => imports must be replaced by lazy import in order to enable lazy-loading
// import CollectionItem from "../collection-item/collection-item.component";
const CollectionItem = lazy(() =>
	import("../collection-item/collection-item.component")
);

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
					<Suspense fallback={<Spinner />}>
						{/* Each lazy-loading import is essentially "async" so must be w/in "await" or Suspense*/}
						<CollectionItem key={item.id} item={item} />
					</Suspense>
				))}
		</div>
	</div>
);

/*  Wrap around withRouter so that we have access to the routing props that came
from homepage. This is to ensure we do not do prop drilling or tunneling */
export default withRouter(CollectionPreview);
