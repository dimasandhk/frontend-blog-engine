<template>
	<div class="box-signin">
		<h3 class="text-center"><span>Signin</span> to Blog Engine</h3>
		<form>
			<div class="row justify-content-center">
				<div class="col-12 col-md-12 col-lg-8">
					<label>Email</label>
					<input type="email" class="form-control shadow-none" required />
				</div>
				<div class="col-12 col-md-12 col-lg-8">
					<label>Password</label>
					<input type="password" class="form-control shadow-none" required />
				</div>
				<div class="col-12 col-md-10 col-lg-8 text-center mt-3">
					<button class="btn btn-dark shadow-none" type="submit">Become Journalist</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/scheme.scss";
.box-signin {
	@include authCard();
}
</style>
