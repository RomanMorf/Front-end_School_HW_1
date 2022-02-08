import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash'
import player from '@/store/player'

describe('player actions test', () => {
  let store
  let volume

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(cloneDeep(player))
    volume = store.state.playerInfo.GET_VOLUME
  })

  test('action method SET_VOLUME', async () => {
    const newVolume = 30
    expect(store.state.playerInfo.volume).toBe(50)
    store.dispatch('SET_VOLUME', newVolume)
    expect(store.state.playerInfo.volume).toBe(newVolume)
  })
  
  test('action method SET_MUTED', () => {
    expect(store.state.playerInfo.muted).toBe(false)
    store.dispatch('SET_MUTED', true)
    expect(store.state.playerInfo.muted).toBe(true)
  })

});
