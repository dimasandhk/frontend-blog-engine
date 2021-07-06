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
}
