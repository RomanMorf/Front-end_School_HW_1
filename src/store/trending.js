import axios from "axios";

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
        url: "https://tiktok33.p.rapidapi.com/trending/feed",
        headers: {
          "x-rapidapi-host": "tiktok33.p.rapidapi.com",
          "x-rapidapi-key": "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66",
        },
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
