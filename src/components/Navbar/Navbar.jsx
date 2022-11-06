import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar() {

	const links = [
		["Home", "/"],
		["Blogs", "/blogs"],
		["Add Blog", "/post"]
	];

	return (
		<nav className="site-global-nav">
			<menu className="site-global-nav-menu">
				{
					links.map(([text, path] ,i) => <li key={i}><Link to={path}>{text}</Link></li>)
				}
			</menu>
		</nav>
	);
}

export default Navbar;