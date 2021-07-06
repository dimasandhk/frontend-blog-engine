<template>
	<div>
		<h5 v-if="Object.keys(docs).length">
			Pages: {{ docs.totalPages }} | Blogs: {{ docs.totalDocs }}
		</h5>
		<h5 v-else>Pages: - | Blogs: -</h5>
		<div class="row justify-content-center">
			<BlogCard v-for="blog of docs.docs" :key="blog._id" :blog="blog" />
		</div>
	</div>
</template>

<script>
import progress from "nprogress";
import GuestService from "../../api/GuestService";
import BlogCard from "../../components/BlogCard.vue";

export default {
	components: { BlogCard },
	data: () => ({
		docs: {}
	}),
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
	}
};
</script>

<style lang="scss" scoped></style>
