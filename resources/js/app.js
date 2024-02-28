import "./bootstrap";

import { createApp } from "vue";
import PostIndex from "./components/Posts/PostIndex.vue";
const app = createApp();
app.component("post-index", PostIndex);

app.mount("#app");
