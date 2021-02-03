import React from "react";

import CollectionItem from "./collection-item.component";

const CollectionPreview = ({ title, items }) => {
	return (
		<div className="collection">
			<h1 className="collection--title">{title.toUpperCase()}</h1>
			<div className="collection--preview">
				{items
					.filter((item, i) => i < 4)
					.map(({ id, ...otherItemProps }) => {
						return <CollectionItem key={id} {...otherItemProps} />
						// <div key={id}>{otherSectionProps.name}</div>;
					})}
			</div>
		</div>
	);
};

export default CollectionPreview;
