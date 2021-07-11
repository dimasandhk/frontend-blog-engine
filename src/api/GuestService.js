import axios from "redaxios";

export default class {
	static async getLatestBlog(page) {
		const response = await axios.get(`/api/latest-blog?page=${page}`);
		return response.data;
	}
	static async getOldestBlog(page) {
		const response = await axios.get(`/api/oldest-blog?page=${page}`);
		return response.data;
	}
	static async getBlogById(id) {
		const response = await axios.get(`/api/blog?id=${id}`);
		return response.data;
	}
	static async addComment(id, name, desc) {
		const response = await axios.post(`/api/comment-blog?id=${id}`, { name, desc });
		return response.data;
	}
}
