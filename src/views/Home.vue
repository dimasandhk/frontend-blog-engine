<template>
	<div class="home">
		<div class="container mt-5 text-center">
			<h1 class="mb-4"><span>Blog Engine</span> by Dimas</h1>
			<router-link class="btn btn-lg btn-dark shadow-none" :to="{ name: 'BlogSection' }">
				Masuk Ke Blog
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home"
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/scheme.scss";
.home {
	h1 {
		span {
			color: $text;
		}
		color: #333;
		font-weight: 700;
	}
	.btn {
		@include mainButton("true");
	}
}
</style>
