<template>
	<div class="row justify-content-center text-center mt-4">
		<div class="col-12 col-md-12 col-lg-12">
			<div class="nav-group">
				<button class="btn btn-secondary shadow-none" v-show="!page.hasPrevPage" disabled>
					&lt;&lt;
				</button>
				<router-link
					v-show="page.hasPrevPage"
					:to="`${$route.path}?page=${parseInt($route.query.page) - 1}`"
					class="btn btn-secondary shadow-none"
					>&lt;&lt;</router-link
				>
				<button v-show="!page.hasNextPage" class="btn btn-secondary shadow-none" disabled>
					&gt;&gt;
				</button>
				<router-link
					v-show="page.hasNextPage"
					:to="`${$route.path}?page=${parseInt($route.query.page) + 1}`"
					class="btn btn-secondary shadow-none"
					>&gt;&gt;</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		page: Object
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/scheme.scss";
.nav-group {
	a,
	button {
		margin-right: 10px;
	}
	.btn {
		color: #fff !important;
		@include mainButton("false");
	}
}
</style>
