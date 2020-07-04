import React from "react";

import Directory from "../../components/directory/directory.component";

// Needed for styled-components styling
import { HomePageContainer } from "./homepage.styles";

// import "./homepage.styles.scss"; => Deprecated (converted sass to styled-components)

// HomePage => Directory (separated into components for better management)
const HomePage = () => (
	<HomePageContainer>
		<Directory />
	</HomePageContainer>
);

export default HomePage;
