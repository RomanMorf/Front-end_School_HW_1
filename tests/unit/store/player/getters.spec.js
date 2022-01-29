import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash'
import player from '@/store/player'

describe('player getters test', () => {
  let store

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(cloneDeep(player))
  })

  test('getter MUTED test', () => {
    expect(store.getters.GET_MUTED).toBe(false)
  })

  test('getter GET_VOLUME test', () => {
    expect(store.getters.GET_VOLUME).toBe(50)
  })

});
