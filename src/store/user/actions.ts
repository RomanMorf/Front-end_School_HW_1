import { getUserInfo } from "@/services/getUserInfo";
import { getUserFeed } from "@/services/getUserFeed";
import { Commit } from 'vuex';

export const actions = {
  async GET_USER_INFO({ commit }: { commit: Commit }, user: string) {
    const userInfo = await getUserInfo(user);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    commit("setUserInfo", userInfo);
  },

  async GET_USER_FEED({ commit }: { commit: Commit }, user: string) {
    const userFeed = await getUserFeed(user);
    localStorage.setItem("userFeed", JSON.stringify(userFeed));
    commit("setUserFeed", userFeed);
  },
}
