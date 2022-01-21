export default {
  state: {
    playerInfo: {
      volume: 50,
      muted: false,
    },
  },

  mutations: {
    setVolume(state, volume) {
      state.playerInfo.volume = volume;
    },
    setMuted(state, muted) {
      state.playerInfo.muted = muted;
    },
  },

  actions: {
    GET_PLAYER_INFO({ commit }) {
      if (localStorage.playerVolume) {
        const volume = localStorage.getItem("playerVolume");
        commit("setVolume", JSON.parse(volume));
      }
      if (localStorage.playerMuted) {
        const muted = localStorage.getItem("playerMuted");
        commit("setMuted", JSON.parse(muted));
      }
    },
    SET_VOLUME({ commit }, newValue) {
      localStorage.setItem("playerVolume", newValue);
      commit("setVolume", newValue);
    },
    SET_MUTED({ commit }, muted) {
      localStorage.setItem("playerMuted", muted);
      commit("setMuted", muted);
    },
  },

  getters: {
    VOLUME: (s) => s.playerInfo.volume,
    MUTED: (s) => s.playerInfo.muted,
  },

};
