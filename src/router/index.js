import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Journalist from "../api/JournalistService";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/blog",
		name: "BlogSection",
		component: () => import("../views/blogs/Blog.vue"),
		redirect: "/blog/latest",
		children: [
			{
				path: "latest",
				name: "LatestBlog",
				component: () => import("../views/blogs/LatestBlog.vue")
			},
			{
				path: "oldest",
				name: "OldestBlog",
				component: () => import("../views/blogs/OldestBlog.vue")
			}
		]
	},
	{
		path: "/journalist",
		name: "Journalist",
		component: () => import("../views/Journalist.vue"),
		children: [
			{
				path: "dashboard",
				name: "JournalistArea",
				component: () => import("../views/journalist/JournalistArea.vue")
			}
		],
		beforeEnter: async function(to, from, next) {
			if (to.path == "/journalist") {
				try {
					await Journalist.verifyJournalist();
					return next("/journalist/dashboard");
				} catch (err) {
					return next();
				}
			} else if (to.path == "/journalist/dashboard") {
				try {
					await Journalist.verifyJournalist();
					return next();
				} catch (err) {
					return next("/journalist");
				}
			}
		}
	},
	{
		path: "/:catchAll(.*)",
		name: "PageNotFound",
		component: () => import("@/views/PageNotFound.vue")
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	linkActiveClass: "active"
});

export default router;
