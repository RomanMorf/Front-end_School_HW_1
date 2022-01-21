import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash'
import player from '@/store/player.js'

describe('player actions test', () => {
  let store
  let volume

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(cloneDeep(player))
    volume = store.state.playerInfo.volume
  })

  test('action method SET_VOLUME', () => {
    const newVolume = 30

    expect(store.state.playerInfo.volume).toBe(volume)
    store.dispatch('SET_VOLUME', newVolume)
    expect(store.state.playerInfo.volume).toBe(newVolume)
  })
  
  test('action method SET_MUTED', () => {
    expect(store.state.playerInfo.muted).toBe(false)
    store.dispatch('SET_MUTED', true)
    expect(store.state.playerInfo.muted).toBe(true)
  })

});

describe('player getters test', () => {
  let store

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(cloneDeep(player))
  })

  test('getter MUTED test', () => {
    expect(store.getters.MUTED).toBe(false)
  })

  test('getter VOLUME test', () => {
    expect(store.getters.VOLUME).toBe(50)
  })

});

describe('player mutations test', () => {
  let store

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(cloneDeep(player))
  })

  test('mutations setVolume test', () => {
    const newValue = 25

    expect(store.getters.VOLUME).toBe(50)
    store.commit('setVolume', newValue)
    expect(store.getters.VOLUME).toBe(newValue)
  })

  test('mutations setMuted test', () => {
    expect(store.getters.MUTED).toBe(false)
    store.commit('setMuted', true)
    expect(store.getters.MUTED).toBe(true)
  })

});
