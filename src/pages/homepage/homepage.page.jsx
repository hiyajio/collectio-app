import React from "react";

import Directory from "../../components/directory/directory.component";

// Needed for styled-components styling
import { HomePageContainer } from "./homepage.styles";

// HomePage => Directory (separated into components for better management)
const HomePage = () => {
	// UNCOMMENT BELOW to test ErrorBoundary feature
	// throw Error;
	return (
		<HomePageContainer>
			<Directory />
		</HomePageContainer>
	);
};

export default HomePage;
