import "./bootstrap";

import { createApp } from "vue";
import PostIndex from "./components/Posts/PostIndex.vue";
import PostEdit from "./components/Posts/PostEdit.vue";
import PostCreate from "./components/Posts/PostCreate.vue";
import HomeView from "./components/Home/HomeView.vue";
import router from "./router";

const app = createApp().use(router);
app.component("post-index", PostIndex);
app.component("post-edit", PostEdit);
app.component("post-create", PostCreate);
app.component("home-view", HomeView);

app.mount("#app");
