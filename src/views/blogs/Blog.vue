<template>
	<div>
		<Navbar />
		<div class="blog-section mb-5">
			<div class="container">
				<h3>
					<span>{{ $route.name.split("Blog")[0] }}</span> Blogs
				</h3>
				<router-view @notFound="switchState" />
				<h5 class="mt-3" v-show="show404">
					{{ $route.name.split("Blog")[0] }} Blogs not found on page {{ $route.query.page }}
				</h5>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		show404: false
	}),
	beforeCreate() {
		if (!this.$route.query.page) {
			this.$router.push(`${this.$route.path}?page=1`);
		}
	},
	methods: {
		switchState(bool) {
			this.show404 = bool;
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
