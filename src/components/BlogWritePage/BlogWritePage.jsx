import {useEffect, useContext, useRef} from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import {useNavigate} from "react-router-dom";
import {writeBlog, validateBlogPost} from "../../API";
import "./BlogWritePage.css";

function BlogWritePage() {
	function submitHandler(e) {
		e.preventDefault();
		const inputs = e.target.querySelectorAll("input, textarea, button, checkbox");
		inputs.forEach(input => input.disabled = true);
		const blogTitle = title.current.value,
			blogContent = content.current.value,
			isValidPost = validateBlogPost(blogTitle, blogContent);
		if (isValidPost) {
			writeBlog(blogTitle, blogContent, new Date().getTime(), "testAuthor").then(data => {
				console.log(data);
				navigate("/blogs/" + data.id);
			});
		} else {
			alert("Invalid form title/body");
			inputs.forEach(input => input.disabled = false);
		}
	}
	const title = useRef(),
		content = useRef(),
		context = useContext(GlobalContext),
		navigate = useNavigate();

	useEffect(() => {
		context.setPageHeader("Create new blog");
	}, []);

	return (
		<form className="write-form" onSubmit={submitHandler}>
			<label>
				<h3>Blog title</h3>
				<input type="text" ref={title} required />
			</label>
			<label>
				<h3>Your blog content</h3>
				<textarea ref={content}>
				</textarea>
			</label>
			<button>Submit</button>
		</form>
	);
}

export default BlogWritePage;