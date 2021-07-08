import axios from "redaxios";

export default class {
	static async loginJournalist(email, password) {
		const response = await axios.post("/api/journalist/login", { email, password });
		return response.data;
	}
	static async signupJournalist(name, email, password) {
		const response = await axios.post("/api/journalist/signup", { name, email, password });
		return response.data;
	}
	static async verifyJournalist() {
		const response = await axios.post("/api/journalist/profile-verify");
		return response.data;
	}
	static async logoutJournalist() {
		const response = await axios.post("/api/journalist/logout");
		return response.data;
	}
	static async getBlog(id) {
		const response = await axios.get(`/api/journalist/blog?id=${id}`);
		return response.data;
	}
}
