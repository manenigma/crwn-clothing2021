import { connect } from "react-redux";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../vendors/redux/shop/shop.selector";
import WithSpinner from "./with-spinner.component";

import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = (state) => {
	return {
		isLoading: selectIsCollectionFetching(state)
	}
}

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionsOverview);

// connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export default CollectionsOverviewContainer