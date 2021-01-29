import React from "react";

import Directory from "../components/directory.component";

const HomePage = (props) => { // props come from with react-router-dom => history, location, match
	console.log(props)
	return (
		<div className="homepage">
			<Directory />
		</div>
	)
}

export default HomePage;