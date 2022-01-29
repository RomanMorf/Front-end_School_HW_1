import { State } from "@/domain/state/State.interface";

export const getters = {
  TRENDING: (s: State) => s.trending,
}