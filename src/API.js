const baseUrl = "http://localhost:8000";

export const getBlogs = () => fetch(`${baseUrl}/blogs`)
	.then(req => req.json());

export const getBlog = (id) => fetch(`${baseUrl}/blogs/${id}`)
	.then(req => req.json());

export const writeBlog = (title, content, date, author) => fetch(`${baseUrl}/blogs`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({title, content, date, author})
	})
	.then(req => req.json())

export const validateBlogPost = (title, content) => {
	if (
		// title 1-125 characters long
		(1 <= title.length && title.length <= 125)
	) {
		return true;
	}
	return false;
}