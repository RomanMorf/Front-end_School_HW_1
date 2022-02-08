import { State } from "@/domain/state/State.interface";

export const getters = {
  ERROR: (s: State) => s.error,
}