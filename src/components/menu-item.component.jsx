import React from "react";

const MenuItem = ({ title, imageUrl, size }) => {
	return (
		<div className={`menu-item ${size}`}>
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="title">
				<h1 className="h1 title--main">{title}</h1>
				<span className="title--sub">Shop now</span>
			</div>
		</div>
	);
};

export default MenuItem;
