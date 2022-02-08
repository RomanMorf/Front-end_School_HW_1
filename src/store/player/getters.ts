import { State } from "@/domain/state/State.interface";

export const getters = {
  GET_VOLUME: (s: State) => s.playerInfo.volume,
  GET_MUTED: (s: State) => s.playerInfo.muted,
}