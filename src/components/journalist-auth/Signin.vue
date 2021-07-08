<template>
	<div class="box-signin">
		<h3 class="text-center"><span>Signin</span> to Blog Engine</h3>
		<form @submit="passSignInData">
			<div class="row justify-content-center">
				<div class="col-12 col-md-12 col-lg-8">
					<label>Email</label>
					<input type="email" class="form-control shadow-none" v-model="email" required />
				</div>
				<div class="col-12 col-md-12 col-lg-8">
					<label>Password</label>
					<input type="password" class="form-control shadow-none" v-model="pass" required />
				</div>
				<div class="col-12 col-md-10 col-lg-8 text-center mt-3">
					<button class="btn btn-dark shadow-none" type="submit">Enter the dashboard</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import JournalistService from "../../api/JournalistService";

export default {
	data: () => ({
		email: "",
		pass: ""
	}),
	methods: {
		async passSignInData(e) {
			e.preventDefault();

			try {
				await JournalistService.loginJournalist(this.email, this.pass);
				this.$router.push({ name: "JournalistArea" });
			} catch (err) {
				alert(err);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/scheme.scss";
.box-signin {
	@include authCard();
}
</style>
