import { State } from "@/domain/state/State.interface";
import { FeedItem } from "@/domain/feed/FeedItem.iterface";

export const mutations = {
  setTrendingInfo(state: State, trending: Array<FeedItem>) {
    state.trending = trending;
  },
  clearTrendingInfo(state: State) {
    state.trending = [];
  },
}
