import React from "react";

import Directory from "../components/directory.component";
import { HomePageContainer } from "../styled/pages/homepage.styles";

const HomePage = (props) => {
	// props come from with react-router-dom => history, location, match
	console.log(props);
	return (
		<HomePageContainer>
			<Directory />
		</HomePageContainer>
	);
};

export default HomePage;
