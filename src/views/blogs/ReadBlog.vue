<template>
	<div>
		<Navbar />
		<div class="read-blog mb-5">
			<div class="container" v-if="Object.keys(blog).length">
				<div class="blog-header">
					<h3>{{ blog.title }} <span>|</span> {{ blog.creator }}</h3>
					<h5>
						{{ blog.createdAt.split("T")[0] }} <span class="divi">| </span>
						<span v-for="(tag, i) of blog.tags" :key="tag"
							>{{ tag }}{{ i == blog.tags.length - 1 ? "" : ", " }}</span
						>
					</h5>
				</div>
				<p v-html="parse(blog.rawContent)" class="mt-4 content"></p>
				<h3 class="mt-5">Comments</h3>
				<div class="row">
					<div class="col-12 col-md-12 col-lg-8">
						<form class="form-comment rounded" @submit="submitComment">
							<input
								v-model="name"
								type="text"
								placeholder="Name"
								class="form-control shadow-none"
							/>
							<input
								v-model="desc"
								type="text"
								placeholder="Comment"
								class="form-control shadow-none mt-2"
							/>
							<button type="submit" class="btn btn-dark shadow-none mt-2">Add Comment</button>
						</form>
					</div>
				</div>
				<div class="blog-comments mt-3">
					<div class="comment-box rounded mt-3" v-for="comment of blog.comments" :key="comment._id">
						<div class="row">
							<div class="col-12 col-md-12 col-lg-1">
								<img :src="comment.profile" alt="" class="rounded" />
							</div>
							<div class="col-12 col-md-12 col-lg-11">
								<h5>{{ comment.name }}</h5>
								<p>{{ comment.desc }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Marked from "marked";
import GuestService from "../../api/GuestService";
export default {
	data: () => ({
		blog: {},
		name: "",
		desc: ""
	}),
	async created() {
		const response = await GuestService.getBlogById(this.$route.params.id);
		console.log(response);
		this.blog = { ...response };
	},
	methods: {
		parse(raw) {
			raw = raw.replace("\n", "<br/>");
			return Marked(raw);
		},
		async submitComment(e) {
			e.preventDefault();

			try {
				const response = await GuestService.addComment(this.$route.params.id, this.name, this.desc);
				this.blog.comments = [...response];

				this.name = "";
				this.desc = "";
			} catch (err) {
				alert(err);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/scheme.scss";
.read-blog {
	h3 {
		span {
			color: $text;
		}
		font-weight: 700;
	}
	.form-comment {
		button {
			@include mainButton("false");
		}
		.form-control {
			&:focus {
				border: 1.5px solid $bg;
			}
			border: 1px solid #333;
			outline: none;
		}
		border: 2px solid $bg;
		padding: 15px;
	}
	h5 {
		span {
			font-weight: 700;
		}
		.divi {
			@extend span;
			color: $text;
		}
	}

	.comment-box {
		h5,
		p {
			font-weight: 600;
		}
		img {
			width: 100%;
		}
		border: 2px solid $bg;
		padding: 25px;
	}

	margin-top: 123px;
}

@media only screen and (max-width: 990px) {
	.comment-box {
		img {
			width: 25% !important;
		}
		h5 {
			margin-top: 15px;
		}
	}
}
</style>
