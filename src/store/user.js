import { getUserInfo, getUserFeed } from '@/api/rapidapi-services.js'

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
      const userInfo = await getUserInfo(user)

      commit("setUserInfo", userInfo);
    },

    async GET_USER_FEED({ commit }, user) {
      const userFeed = await getUserFeed(user)

      commit("setUserFeed", userFeed);
    },
  },

  getters: {
    INFO: (s) => s.userInfo,
    FEED: (s) => s.userFeed,
  },

};
