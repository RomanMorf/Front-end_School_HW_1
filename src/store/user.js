import axios from "axios";
import { urlApi, headersApi } from "../api/rapidapi"

export default {
  state: {
    userInfo: {},
    userFeed: {},
  },

  mutations: {
    setUserInfo(state, info) {
      state.userInfo = info;
    },
    setUserFeed(state, feed) {
      state.userFeed = feed;
    },

    clearUserInfo(state) {
      state.userInfo = {};
    },
    clearUserFeed(state) {
      state.userFeed = {};
    },

  },

  actions: {
    async GET_USER_INFO({ commit }, user) {
      const options = {
        method: "GET",
        url: `${urlApi}/user/info/${user}`,
        headers: headersApi,
      };
      await axios.request(options).then((response) => {
        commit("setUserInfo", response.data);
        return response.data;
      }).catch((error) => {
        commit("setError", error);
        throw error;
      });
    },

    async GET_USER_FEED({ commit }, user) {
      const options = {
        method: "GET",
        url: `${urlApi}/user/feed/${user}`,
        headers: headersApi,
      };
      await axios.request(options).then((response) => {
        commit("setUserFeed", response.data);
        return response.data;
      }).catch((error) => {
        commit("setError", error);
        throw error;
      });
    },
  },

  getters: {
    INFO: (s) => s.userInfo,
    FEED: (s) => s.userFeed,
  },

};
