import { createSelector } from "reselect";
import memoize from "lodash.memoize";

export const selectShop = (state) => {
	return state.shop;
};

export const selectShopCollections = createSelector([selectShop], (shop) => {
	return shop.collections;
});

export const selectShopCollectionsOverview = createSelector(
	[selectShopCollections],
	(collections) => {
		return collections
			? Object.keys(collections).map((key) => collections[key])
			: [];
	}
);

export const selectCollection = memoize((collectionUrlParam) =>
	createSelector([selectShopCollections], (collections) =>
		collections ? collections[collectionUrlParam] : null
	)
);
