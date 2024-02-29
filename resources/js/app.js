import "./bootstrap";

import { createApp } from "vue";
import PostIndex from "./components/Posts/PostIndex.vue";
import HomeView from "./components/Home/HomeView.vue";

const app = createApp();
app.component("post-index", PostIndex);
app.component("home-view", HomeView);

app.mount("#app");
