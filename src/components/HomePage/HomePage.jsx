import {useEffect, useContext} from "react";
import {GlobalContext} from "../../contexts/GlobalContext";

import "./HomePage.css";

function HomePage() {

	const context = useContext(GlobalContext);

	useEffect(() => {
		context.setPageHeader("Home Page");
	}, []);

	return (
		<>
			<p>
				home page content
			</p>
		</>
	);
}

export default HomePage;