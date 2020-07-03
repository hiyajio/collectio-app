/* Selectors are used to avoid using the entire state and rerendering each time
something is passed through the one-way data flow (i.e. even if nothing changed
for the specific action-reducer combo, they still rerender since they're
sharing the same stream of data */
import { createSelector } from "reselect";

// Needed to memoize selectCollection function
import memoize from "lodash.memoize";

/* Selectors also aim to give us back only a piece of state for further optimization.
Seen here as state => state.shop => shop.collections (final) */
const selectShop = (state) => state.shop;

// Selector for getting only shop.collections state
export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);

// Selector for transforming JS Object collections to array collections
export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	// Get key from Object, use it as index to Object to make it into array
	(collections) => Object.keys(collections).map((key) => collections[key])
);

/* Needed third-party dependency to memoize since collectionUrlParam is dynamic
argument. Memoize optimized this function so if the same url is used, we don't
have to render it again (i.e. going from /premium to /premium) */
// Selector for finding only the matching collection.id state
export const selectCollection = memoize((collectionUrlParam) =>
	createSelector(
		[selectCollections],
		(collections) => collections[collectionUrlParam]
	)
);
