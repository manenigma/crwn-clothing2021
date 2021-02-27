import React from "react";
import { withRouter } from 'react-router-dom';

import CollectionItem from "./collection-item.component";

const CollectionPreview = ({ title, items, ...otherProps }) => {
	const { routeName, match, history } = otherProps
	// console.log(otherProps);
	return (
		<div className="collection">
			<h1 className="collection--title" onClick={() => history.push(`${match.url}/${routeName}`)} >{title.toUpperCase()}</h1>
			<div className="collection--items">
				{items
					.filter((item, i) => i < 4)
					.map((item) => {
						return <CollectionItem key={item.id} item={item} />
						// <div key={id}>{otherSectionProps.name}</div>;
					})}
			</div>
		</div>
	);
};

export default withRouter(CollectionPreview);
