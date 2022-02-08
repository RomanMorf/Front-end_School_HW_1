import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash'
import player from '@/store/player'

describe('player mutations test', () => {
  let store

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(cloneDeep(player))
  })

  test('mutations setVolume test', () => {
    const newValue = 25

    expect(store.getters.GET_VOLUME).toBe(50)
    store.commit('setVolume', newValue)
    expect(store.getters.GET_VOLUME).toBe(newValue)
  })

  test('mutations setMuted test', async () => {
    expect(store.getters.GET_MUTED).toBe(false)
    await store.commit('setMuted', true)
    expect(store.getters.GET_MUTED).toBe(true)
  })

});
