import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/styles/style.scss";

import shortNumber from "@/heplers/shortNumber.filter";

import Loader from "vue-tiktuk-loader";
import Header from "vue-tiktuk-header";

Vue.config.productionTip = false;

Vue.component("Header", Header);
Vue.component("Loader", Loader);

Vue.filter("short", shortNumber);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
