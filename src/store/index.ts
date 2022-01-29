import Vue from "vue";
import Vuex from "vuex";

import player from "./player";
import user from "./user";
import trending from "./trending";
import error from "./error";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    user,
    error,
    player,
    trending,
  },
});
