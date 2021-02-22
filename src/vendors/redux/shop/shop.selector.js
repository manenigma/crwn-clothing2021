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
		return Object.keys(collections).map((key) => {
			return collections[key];
		});
	}
);

export const selectCollection = memoize((collectionUrlParam) => {
	return createSelector([selectShopCollections], (collections) => {
		return collections[collectionUrlParam];
	});
});
