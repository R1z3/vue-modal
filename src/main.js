import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";

import Vuety from "./components/config/config";
const app = createApp(App);

app.use(Vuety);

app.mount("#app");
