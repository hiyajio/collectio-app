import ShopActionTypes from "./shop.types";

// Action for updating (showing to front end) Collections from Firebase retrieval
export const updateCollections = (collectionsMap) => ({
	type: ShopActionTypes.UPDATE_COLLECTIONS,
	payload: collectionsMap,
});
