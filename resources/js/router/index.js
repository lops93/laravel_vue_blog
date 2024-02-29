import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/Home/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/posts",
            name: "PostIndex",
            component: () => import("../components/Posts/PostIndex.vue"),
        },
        {
            path: "/posts/create",
            name: "PostCreate",
            component: () => import("../components/Posts/PostCreate.vue"),
        },
        {
            path: "/posts/:id/edit",
            name: "PostEdit",
            component: () => import("../components/Posts/PostEdit.vue"),
            props: true,
        },
    ],
});

export default router;
