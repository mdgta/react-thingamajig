// hooks
import {useState, useEffect, useContext} from "react";
import {Routes, Route} from "react-router-dom";

// context
import {GlobalContext} from "../../contexts/GlobalContext";

// components
import PageHeader from "../PageHeader/PageHeader";
import HomePage from "../HomePage/HomePage";
import BlogWritePage from "../BlogWritePage/BlogWritePage";
import BlogListPage from "../BlogListPage/BlogListPage";
import BlogPage from "../BlogPage/BlogPage";

// css
import "./SiteContent.css";

function SiteContent() {

	const context = useContext(GlobalContext);

	return (
		<section className="site-global-sitecontent">
			{context.pageHeader && <PageHeader title={context.pageHeader} />}
			<main className="site-global-main">
				<Routes>
					<Route path="/" element={<HomePage />}/>
					<Route path="/post" element={<BlogWritePage />}/>
					<Route path="/blogs" element={<BlogListPage />}/>
					<Route path="/blogs/:blogId" element={<BlogPage />}/>
				</Routes>
			</main>
		</section>
	);
}

export default SiteContent;