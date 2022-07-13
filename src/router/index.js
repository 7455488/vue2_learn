import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    meta: { title: "首页" },
    component: () => import("@/views/home"),
  },
  {
    path: "/category",
    name: "category",
    meta: { title: "分类" },
    component: () => import("@/views/category"),
  },
  {
    path: "/cart",
    name: "cart",
    meta: { title: "购物车" },
    component: () => import("@/views/cart"),
  },
  {
    path: "/profile",
    name: "profile",
    meta: { title: "profile" },
    component: () => import("@/views/profile"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
