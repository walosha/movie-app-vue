import Vue from "vue";
import Router from "vue-router";
import Index from "../views/Index.vue";
import Movie from "../views/Movie.vue";
import AppHeader from "../components/AppHeader.vue";
import Error404 from "../views/Error404.vue";
import AppSideBar from "../components/SideBar.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: AppHeader, sidebar: AppSideBar },
    },
    {
      path: "/movie/:id",
      name: "movie",
      components: { default: Movie, header: AppHeader, sidebar: AppSideBar },
    },
    {
      path: "*",
      name: "error404",
      // component: () =>
      //   import(/* webpackChunkName: "error404" */ "../views/Error404.vue"),
      components: { default: Error404, header: AppHeader, sidebar: AppSideBar },
    },
  ],
});
