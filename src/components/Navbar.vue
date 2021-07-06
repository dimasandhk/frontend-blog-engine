<template>
	<nav class="navbar fixed-top navbar-expand-lg navbar-light">
		<div class="container">
			<router-link class="navbar-brand" to="/">Blog Engine >></router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav ml-auto">
					<router-link class="nav-link mr-3" to="/">Home</router-link>
					<router-link class="nav-link mr-3" :to="{ name: 'LatestBlog' }">Latest Blog</router-link>
					<router-link class="nav-link mr-3" :to="{ name: 'OldestBlog' }">Oldest Blog</router-link>
					<router-link class="nav-link mr-3" to="/">Journalist</router-link>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/scheme.scss";
.navbar {
	box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 0px;
	padding-top: 15px;
	padding-bottom: 15px;
	background-color: white;
	.navbar-nav::after {
		transform-origin: 100% 50%;
	}
	.nav-link {
		@media (min-width: 992px) {
			&::after {
				display: block;
				content: "";
				border-bottom: solid 3px $text;
				transform: scaleX(0);
				transition: transform 200ms ease-in-out;
			}
			&:hover::after {
				transform: scaleX(1);
			}
		}
		&:hover {
			color: $text;
		}
		font-weight: 600;
		color: #000;
	}
	.navbar-brand {
		text-decoration: underline;
		color: $text;
		font-weight: 700;
	}
}
</style>
