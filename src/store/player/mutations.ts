import { State } from "@/domain/state/State.interface";

export const mutations = {
  setVolume(state: State, volume: number) {
    state.playerInfo.volume = volume;
  },
  setMuted(state: State, muted: boolean) {
    state.playerInfo.muted = muted;
  },
}

