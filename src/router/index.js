import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

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
				path: "/:catchAll(.*)",
				redirect: "/blog/latest"
			},
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
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	linkActiveClass: "active"
});

export default router;
