import { State } from "@/domain/state/State.interface";

export const mutations = {
  setError(state: State, error: any) {
    state.error = error;
  },
  clearError(state: State) {
    state.error = null;
  },
}
