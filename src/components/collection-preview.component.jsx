import React from "react";

import CollectionItem from "./collection-item.component";

const CollectionPreview = ({ title, items }) => {
	return (
		<div className="collection">
			<h1 className="collection--title">{title.toUpperCase()}</h1>
			<div className="collection--preview">
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

export default CollectionPreview;
