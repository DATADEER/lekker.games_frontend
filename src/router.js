import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
//import About from './views/About.vue'

import SetInterestThreshold from "./views/SetInterestThreshold.vue";
import ComingSoon from "./views/ComingSoon.vue";
import Search from "./views/Search.vue";
import Result from "./views/Result.vue";
import LoadingGameData from "./views/LoadingGameData.vue";
import GetUserData from "./views/GetUserData.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/mygames",
      name: "getUserData",
      component: GetUserData
    },
    {
      path: "/loadinggames",
      name: "loadingGameData",
      component: LoadingGameData
    },
    {
      path: "/interest",
      name: "setInterestThreshold",
      component: SetInterestThreshold
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/soon",
      name: "comingSoon",
      component: ComingSoon
    },
    {
      path: "/result",
      name: "result",
      component: Result
    }
  ]
});
