import { Commit } from 'vuex';

export const actions = {
  GET_PLAYER_INFO({ commit }: { commit: Commit }) {
    if (localStorage.playerVolume) {
      const newValueStr: string =
      localStorage.getItem("playerVolume") || "30";

      const volume = JSON.parse(newValueStr);
      commit("setVolume", volume);
    }
    if (localStorage.playerMuted) {
      const mutedStr: string = localStorage.getItem("playerMuted") || "false";
      const muted = JSON.parse(mutedStr);

      commit("setMuted", muted);
    }
  },

  SET_VOLUME({ commit }: { commit: Commit }, newValue: number) {
    const newValueStr = JSON.stringify(newValue);

    localStorage.setItem("playerVolume", newValueStr);
    commit("setVolume", newValue);
  },

  SET_MUTED({ commit }: { commit: Commit }, muted: boolean) {
    const mutedStr = JSON.stringify(muted);

    localStorage.setItem("playerMuted", mutedStr);
    commit("setMuted", muted);
  },
}
