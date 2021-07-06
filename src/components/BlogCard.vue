<template>
	<div class="col-12 col-md-6 col-lg-4 mt-3">
		<div class="box-blog rounded">
			<div class="container">
				<h5>{{ blog.title.substr(0, 27) }}{{ blog.title.length > 28 ? " ..." : "" }}</h5>
				<hr />
				<p>{{ blog.desc }}</p>
				<hr />
				<p>Creator: {{ blog.creator }}</p>
				<p class="crtd">Created: {{ blog.createdAt.split("T")[0] }}</p>
				<button class="btn btn-dark btn-block shadow-none">Read More</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		blog: Object
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/scheme.scss";
.box-blog {
	.btn {
		@include mainButton("false");
	}
	.crtd {
		margin-top: -10px;
	}
	padding: 20px 10px;
	border: 2px solid $bg;
}
</style>
