import React from "react";
import { withRouter } from "react-router-dom";
// NOTE use for props tunel drill on React Component is history, loaction, match

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
	return (
		<div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem); // HOF function is return function where make a new modify function => give power up function, Here is can be call HOC = High Order Component
