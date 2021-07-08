<template>
	<div class="journalist-area mb-5">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-12 col-md-12 col-lg-10">
					<div class="box-profile rounded">
						<div class="row justify-content-center">
							<div class="col-12 col-md-12 col-lg-12 text-center">
								<h3>
									Hello <span>{{ profile.name }}</span>
								</h3>
								<h5>Email: {{ profile.email }}</h5>
								<img :src="profile.profile" alt="" class="rounded mt-3" />
							</div>
							<div class="col-12 col-md-12 col-lg-8 text-center mt-3">
								<button class="btn btn-dark shadow-none btn-block" @click="logout">Logout</button>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-12 col-lg-12 mt-5">
					<h3><span>Your</span> Blogs</h3>
				</div>
				<BlogCard v-for="blog of blogs" :key="blog._id" :blog="blog" />
			</div>
		</div>
	</div>
</template>

<script>
import Journalist from "../../api/JournalistService";
import BlogCard from "@/components/BlogCard.vue";

export default {
	components: { BlogCard },
	data: () => ({
		profile: {},
		blogs: []
	}),
	async created() {
		const response = await Journalist.verifyJournalist();
		this.profile = { ...response };

		const blogResponse = await Journalist.getBlog(this.profile._id);
		this.blogs = [...blogResponse];
	},
	methods: {
		async logout() {
			try {
				await Journalist.logoutJournalist();
				this.$router.push({ name: "Journalist" });
			} catch (err) {
				alert(err);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/scheme.scss";
.journalist-area {
	.box-profile {
		img {
			width: 30%;
		}
		.btn {
			@include mainButton("false");
		}
		padding: 20px 40px;
		border: 2px solid $bg;
	}

	h3 {
		span {
			color: $text;
		}
		font-weight: 700;
	}
	margin-top: 123px;
}

@media only screen and (max-width: 768px) {
	.box-profile {
		img {
			width: 60%;
		}
		h3 {
			font-size: 22px;
		}
		h5 {
			font-size: 16px;
		}
	}
}
</style>
