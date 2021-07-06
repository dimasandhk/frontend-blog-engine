<template>
	<div class="col-12 col-md-6 col-lg-4 mt-3">
		<div class="box-blog rounded">
			<div class="container">
				<h5>
					<span class="card__bold"> {{ blog.title.substr(0, 25) }} </span
					>{{ blog.title.length > 25 ? " ..." : "" }}
				</h5>
				<hr />
				<p>{{ blog.desc }}</p>
				<hr />
				<p><span class="card__bold">Creator:</span> {{ blog.creator }}</p>
				<p class="crtd">
					<span class="card__bold">Created:</span> {{ blog.createdAt.split("T")[0] }}
				</p>

				<p class="crtd">
					<span class="card__bold">Tags: </span>
					<span v-for="(tag, i) of blog.tags" :key="tag"
						>{{ tag }}{{ i == blog.tags.length - 1 ? "" : ", " }}
					</span>
				</p>
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
	.card__bold {
		font-weight: 600;
	}
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
