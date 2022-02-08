import { State } from "@/domain/state/State.interface";
import { UserInfo } from "@/domain/user/UserInfo.iterface";
import { FeedItem } from "@/domain/feed/FeedItem.iterface";

export const mutations = {
  setUserInfo(state: State, info: UserInfo) {
    state.userInfo = info;
  },
  setUserFeed(state: State, feed: FeedItem) {
    state.userFeed = feed;
  },
}
