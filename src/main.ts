import { createApp } from "vue";
import "./styles/style.css";
import "./styles/unreset.scss";
import "./styles/prism.css";
import "./styles/common.css";
import App from "./App.vue";
import { router } from "./router";

const prefersColorscheme = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersColorscheme.matches) import("./styles/colorscheme-dark.css");
else import("./styles/colorscheme-light.css");

const app = createApp(App);

app.use(router);
app.mount("#app");
