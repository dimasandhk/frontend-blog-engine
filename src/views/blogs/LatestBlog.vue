<template>
	<div>
		<h5>Pages: {{ docs.totalPages }} | Blogs: {{ docs.totalDocs }}</h5>
		<div class="row justify-content-center">
			<div class="col-12 col-md-6 col-lg-4 mt-3" v-for="blog of docs.docs" :key="blog._id">
				<div class="box-blog rounded">
					<div class="container">
						<h5>{{ blog.title.substr(0, 27) }}{{ blog.title.length > 28 ? " ..." : "" }}</h5>
						<hr />
						<p>{{ blog.desc }}</p>
						<hr />
						<p>Creator: {{ blog.creator }}</p>
						<p>Created: {{ blog.createdAt.split("T")[0] }}</p>
						<button class="btn btn-dark btn-block shadow-none">Read More</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import GuestService from "../../api/GuestService";
export default {
	data: () => ({
		docs: {}
	}),
	async mounted() {
		try {
			const response = await GuestService.getLatestBlog(this.$route.query.page);
			this.docs = { ...response };
		} catch (err) {
			alert(`Page ${err.statusText}`);
			console.clear();
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/scheme.scss";
.box-blog {
	.btn {
		@include mainButton("false");
	}
	padding: 20px 10px;
	border: 2px solid $bg;
}
</style>
