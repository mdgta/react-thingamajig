import {useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import {GlobalContext} from "../../contexts/GlobalContext";
import {getBlogs} from "../../API";
import "./BlogListPage.css";

function BlogListPage() {

	const context = useContext(GlobalContext),
		{blogs, setBlogs} = context;

	useEffect(() => {
		context.setPageHeader("Blogs");
		// update blog page after submission of a new blog without having to refresh the app
		getBlogs().then(data => {
			setBlogs(data);
		});
	}, []);

	return (
		<ul>
			{
				blogs.map(blog => {
					const {id, title, author, date} = blog;
					return (
						<li key={blog.id}>
							<Link to={`/blogs/${id}`}>{title}</Link> &bull; by {author} &bull; {new Date(date).getTime()}
						</li>
					);
				})
			}
		</ul>
	);
}

export default BlogListPage;