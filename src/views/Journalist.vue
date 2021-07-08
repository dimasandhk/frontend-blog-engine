<template>
	<div>
		<Navbar />
		<router-view v-if="!showAuth" />
		<div class="journalist__noauth mb-5" v-else>
			<div class="container">
				<Signup v-if="selected == 'signup'" />
				<Signin v-else />
				<div class="text-center nav-group mt-4">
					<button :class="`${navClass} mr-3`" @click="selected = 'signup'">Signup</button>
					<button :class="navClass" @click="selected = 'signin'">Signin</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Signin from "../components/journalist-auth/Signin.vue";
import Signup from "../components/journalist-auth/Signup.vue";
export default {
	components: { Signup, Signin },
	data: () => ({
		navClass: "btn btn-dark shadow-none",
		selected: "signup",
		showAuth: true
	}),
	created() {
		if (this.$route.path == "/journalist/dashboard") return (this.showAuth = false);
		this.showAuth = true;
	},
	watch: {
		$route: {
			handler(value) {
				if (value.path == "/journalist/dashboard") return (this.showAuth = false);
				this.showAuth = true;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/scheme.scss";
.journalist__noauth {
	.nav-group {
		.btn {
			@include mainButton("false");
		}
	}

	margin-top: 123px;
}
</style>
