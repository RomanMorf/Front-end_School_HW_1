import { Commit } from 'vuex';
import { getTrandingFeed } from "@/services/getTrandingFeed";


export const actions = {
  async GET_TRENDING_FEED({ commit }: { commit: Commit }) {
    const trending = await getTrandingFeed();

    localStorage.setItem("trendingFeedApi", JSON.stringify(trending));
    commit("setTrendingInfo", trending);
  },
}
