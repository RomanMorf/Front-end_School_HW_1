import axios from "axios";
import { urlApi, headersApi } from "../api/rapidapi"

export default {
  state: {
    trending: [],
  },

  mutations: {
    setTrendingInfo(state, trending) {
      state.trending = trending;
    },
    clearTrendingInfo(state) {
      state.userInfo = [];
    },
  },

  actions: {
    async GET_TRENDING_FEED({ commit }) {
      const options = {
        method: "GET",
        url: `${urlApi}/trending/feed`,
        headers: headersApi,
      };

      await axios.request(options).then((response) => {
        commit("setTrendingInfo", response.data);
      }).catch((error) => {
        commit("setError", error);
        throw error;
      });
    },
  },

  getters: {
    TRENDING: (s) => s.trending,
  },

};
