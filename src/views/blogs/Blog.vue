<template>
	<div>
		<Navbar />
		<div class="blog-section">
			<div class="container">
				<h3>
					<span>{{ $route.name.split("Blog")[0] }}</span> Blogs
				</h3>
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	beforeCreate() {
		if (!this.$route.query.page) {
			this.$router.push("/blog/latest?page=1");
		}
	}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/scheme.scss";
.blog-section {
	h3 {
		font-weight: 700;
		span {
			color: $text;
		}
	}
	margin-top: 123px;
}
</style>
