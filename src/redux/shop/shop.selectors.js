/* Selectors are used to avoid using the entire state and rerendering each time
something is passed through the one-way data flow (i.e. even if nothing changed
for the specific action-reducer combo, they still rerender since they're
sharing the same stream of data */
import { createSelector } from "reselect";

// Needed to memoize selectCollection function
import memoize from "lodash.memoize";

/* Needed since router gives us string but data gives us number. Simply assign
the respective number to the route */
const COLLECTION_ID_MAP = {
	premium: 1,
	regular: 2,
};

/* Selectors also aim to give us back only a piece of state for further optimization.
Seen here as state => state.shop => shop.collections (final) */
const selectShop = (state) => state.shop;

// Selector for getting only shop.collections state
export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);

/* Needed third-party dependency to memoize since collectionUrlParam is dynamic
argument. Memoize optimized this function so if the same url is used, we don't
have to render it again (i.e. going from /premium to /premium) */
// Selector for finding only the matching collection.id state
export const selectCollection = memoize((collectionUrlParam) =>
	createSelector([selectCollections], (collections) =>
		collections.find(
			(collection) =>
				// Find matching ID based on assigned mapping
				collection.id === COLLECTION_ID_MAP[collectionUrlParam]
		)
	)
);
