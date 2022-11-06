import {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom";
import {GlobalContext} from "../../contexts/GlobalContext";
import {getBlog} from "../../API";
import "./BlogPage.css";

function BlogPage() {

	const {blogId} = useParams(),
		[blog, setBlog] = useState(null),
		[blogs, setBlogs] = useState([]),
		{setPageHeader} = useContext(GlobalContext);

	useEffect(() => {
		getBlog(blogId).then(data => {
			setBlog(data);
			setPageHeader(data?.title || "Blog not found");
		});
	}, []);

	return (
		<div>
			{
				blog?.content
			}
		</div>
	);
}

export default BlogPage;