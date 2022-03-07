import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import StudentsShow from "../views/StudentsShow.vue";
import StudentsIndex from "../views/StudentsIndex.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/students",
    name: "StudentsIndex",
    component: StudentsIndex,
  },
  {
    path: "/students/:id",
    name: "StudentsShow",
    component: StudentsShow,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
