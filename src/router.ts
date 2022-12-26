import { createRouter, createWebHistory } from "vue-router";

export const history = createWebHistory();
export const router = createRouter({
  history,
  routes: [
    { path: "/", component: () => import("./pages/Home.vue") },
    { path: "/login", component: () => import("./pages/Login.vue") },
    {
      path: "/blog",
      alias: "/posts",
      component: () => import("./pages/Blog.vue"),
    },
    { path: "/posts/new", component: () => import("./pages/NewPost.vue") },
    // { path: "/posts/:id", component: () => "" },
    // { path: "/user/:id", component: () => "" },
    // { path: "/contact", component: () => "" },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("./pages/NotFound.vue"),
    },
  ],
});
