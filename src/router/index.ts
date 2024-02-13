import { createRouter, createWebHistory } from "vue-router";
import SpacePage from "../pages/SpacePage.vue";

const routes = [
  {
    path: "/",
    name: "Space",
    component: SpacePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
