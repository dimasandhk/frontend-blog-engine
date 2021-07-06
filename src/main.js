import { createApp } from "vue";

// Vue
import App from "./App.vue";
import router from "./router";
import store from "./store";

// SCSS
import "./assets/scss/main.scss";
import "nprogress/nprogress.css";

// Components
import Navbar from "./components/Navbar.vue";

createApp(App)
	.use(store)
	.use(router)
	.component("Navbar", Navbar)
	.mount("#app");
