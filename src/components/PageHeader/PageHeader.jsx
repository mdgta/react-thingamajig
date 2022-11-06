import {useContext} from "react";
import "./PageHeader.css";

function PageHeader({title}) {
	return (
		<header>
			<h1>{title}</h1>
		</header>
	);
}

export default PageHeader;