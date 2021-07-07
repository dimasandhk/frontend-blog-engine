<template>
	<div>
		<h5 v-if="Object.keys(docs).length">
			Pages: {{ docs.totalPages }} | Blogs: {{ docs.totalDocs }}
		</h5>
		<h5 v-else>Pages: - | Blogs: -</h5>
		<div class="row justify-content-center">
			<BlogCard v-for="blog of docs.docs" :key="blog._id" :blog="blog" />
		</div>
		<BlogNavigation v-if="!isEmpty" :page="docs" />
	</div>
</template>

<script>
import progress from "nprogress";

import BlogNavigation from "../../components/BlogNavigation.vue";
import GuestService from "../../api/GuestService";
import BlogCard from "../../components/BlogCard.vue";

export default {
	components: { BlogCard, BlogNavigation },
	data: () => ({
		docs: {}
	}),
	props: { isEmpty: Boolean },
	async mounted() {
		progress.start();
		try {
			const response = await GuestService.getOldestBlog(this.$route.query.page);
			this.docs = { ...response };
			this.$emit("notFound", false);
		} catch (err) {
			this.$emit("notFound", true);
			console.clear();
		}

		progress.done();
	},
	watch: {
		$route: {
			async handler(value) {
				try {
					const response = await GuestService.getOldestBlog(value.query.page);
					this.docs = { ...response };
					this.$emit("notFound", false);
				} catch (err) {
					this.$emit("notFound", true);
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped></style>
