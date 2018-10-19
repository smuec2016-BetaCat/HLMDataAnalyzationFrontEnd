import Vue from "vue";
import Router from "vue-router";
import Charts from "./components/Charts";
import MainLayout from "./views/MainLayout";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: MainLayout,
      children: [
        {
          path: "",
          name: "Charts",
          component: Charts
        }
      ]
    }
  ]
});
