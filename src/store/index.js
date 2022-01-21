import Vue from "vue";
import Vuex from "vuex";

import player from "./player";
import user from "./user";
import trending from "./trending";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
  },

  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
  },

  getters: {
    ERROR: (s) => s.error,
  },

  modules: {
    player,
    user,
    trending,
  },
});
