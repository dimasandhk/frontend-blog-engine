<template>
	<div class="mt-5 text-center page-not-found">
		<div class="container">
			<h1><span>This page</span> could not be found</h1>
			<p class="mt-4">
				We are sorry. But the page you are looking for is not available<br />
				Perhaps you can try a new search.
			</p>
			<router-link :to="{ name: 'LatestBlog' }" class="btn btn-dark btn-lg shadow-none"
				>Back To Blog</router-link
			>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/scheme.scss";
h1 {
	font-weight: 700;
	color: #333;
	span {
		color: $text;
	}
}

.btn {
	@include mainButton("true");
}

p {
	font-weight: 600;
}
</style>
