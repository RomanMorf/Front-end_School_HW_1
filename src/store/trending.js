import axios from "axios";
import { urlApi, headersApi } from "../api/rapidapi"
import { getTrandingFeed } from '@/api/rapidapi-services.js'

export default {
  state: {
    trending: [],
  },

  mutations: {
    setTrendingInfo(state, trending) {
      state.trending = trending;
    },
    clearTrendingInfo(state) {
      state.trending = [];
    },
  },

  actions: {
    async GET_TRENDING_FEED({ commit }) {
      const trending = await getTrandingFeed()
      console.log(trending);
      commit("setTrendingInfo", trending);
    },
  },

  getters: {
    TRENDING: (s) => s.trending,
  },

};
