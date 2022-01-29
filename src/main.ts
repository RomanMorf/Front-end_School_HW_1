import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/styles/style.scss";

import shortNumber from "@/heplers/shortNumber.filter";
import Loader from "@/components/Loader.vue";


Vue.config.productionTip = false;

Vue.component("Loader", Loader);
Vue.filter("short", shortNumber);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
