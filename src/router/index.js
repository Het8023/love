import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: "/home",
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../views/login/index.vue"),
        },
        {
            path: "/home",
            name: "home",
            component: () => import("../views/home/index.vue"),
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../views/about/index.vue"),
        },
    ],
});

export default router;
