import { Store } from "vuex";
import { UserInfo } from "@/domain/user/UserInfo.iterface";
import { PlayerInfo } from "@/domain/state/PlayerInfo.interface";
import { FeedItem } from "@/domain/feed/FeedItem.iterface";

export interface State {
  error: string | null;
  playerInfo: PlayerInfo;
  trending: Array<FeedItem>;
  userInfo: UserInfo;
  userFeed: Object;
}

export interface ComponentCustomProperties {
  $store: Store<State>;
}
