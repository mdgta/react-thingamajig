// hooks
import {useState, useEffect, useContext} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// components
import {GlobalContext} from "./contexts/GlobalContext";
import Navbar from "./components/Navbar/Navbar";
import SiteContent from "./components/SiteContent/SiteContent";

import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";

// scripts
import {getBlogs} from "./API";

// css
import "./App.css";

function App() {

	const context = useContext(GlobalContext);

	useEffect(() => {
		getBlogs().then(data => {
			context.setBlogs(data);
		});
	}, []);

	// function FooMain({children}) {
	// 	return (
	// 		<main id="FooMain">
	// 			{children}
	// 		</main>
	// 	);
	// }

	return (
		<Router>
			<div className="App">
				<Navbar />
					<SiteContent />
				<Aside />
				<Footer />
			</div>
			{/* {
				["section", FooMain, "header", "h1"].reduceRight((Subtree, OuterNode) => <OuterNode>{Subtree}</OuterNode>, null)
			} */}
		</Router>
	);
}

export default App;