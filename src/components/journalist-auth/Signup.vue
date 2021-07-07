<template>
	<div class="box-signup">
		<h3 class="text-center"><span>Signup</span> to Blog Engine</h3>
		<form @submit="passSignUpData">
			<div class="row justify-content-center">
				<div class="col-12 col-md-12 col-lg-8">
					<label>Username</label>
					<input type="text" class="form-control shadow-none" v-model="username" required />
				</div>
				<div class="col-12 col-md-12 col-lg-8">
					<label>Email</label>
					<input type="email" class="form-control shadow-none" v-model="email" required />
				</div>
				<div class="col-12 col-md-12 col-lg-5 text-lg-center">
					<label>Password</label>
					<input type="password" class="form-control shadow-none" v-model="pass" required />
				</div>
				<div class="col-12 col-md-12 col-lg-5 text-lg-center">
					<label>Retype Password</label>
					<input type="password" class="form-control shadow-none" v-model="rPass" required />
				</div>
				<div class="col-12 col-md-10 col-lg-8 text-center mt-3">
					<button class="btn btn-dark shadow-none" type="submit">Become Journalist</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import JournalistService from "../../api/JournalistService";
export default {
	data: () => ({
		username: "",
		email: "",
		pass: "",
		rPass: ""
	}),
	methods: {
		async passSignUpData(e) {
			const { username, email, pass } = this;

			e.preventDefault();
			console.log(await JournalistService.signupJournalist(username, email, pass));
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/scheme.scss";
.box-signup {
	@include authCard();
}
</style>
