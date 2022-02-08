import { State } from "@/domain/state/State.interface";

export const getters = {
  INFO: (s: State) => s.userInfo,
  FEED: (s: State) => s.userFeed,
}