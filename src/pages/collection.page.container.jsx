import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';


import { selectIsCollectionsLoaded } from '../vendors/redux/shop/shop.selector';

import WithSpinner from '../components/with-spinner.component';
import CollectionPage from './collection.page';


const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectIsCollectionsLoaded(state)
})
 
export const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionPage);

export default CollectionPageContainer