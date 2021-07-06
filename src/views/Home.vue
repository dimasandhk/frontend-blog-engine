<template>
	<div class="home">
		<div class="container mt-5 text-center">
			<h3 class="mb-4">Blog Engine <br />by Dimas</h3>
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
	h3 {
		color: $text;
		font-weight: 700;
	}
	.btn {
		@include mainButton();
	}
}
</style>
