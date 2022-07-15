import { createApp } from "vue";
import "./lib/momo.scss"
import "./index.scss";
import App from "./App.vue";
import { router } from "./router"
import "./lib/svg.js"
import "github-markdown-css"


const app = createApp(App);
app.use(router);
app.mount("#app");
