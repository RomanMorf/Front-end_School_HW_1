import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash'
import user from '@/store/user.js'

describe('trending getters tests', () => {
  let store
  let emptyUserInfo
  let emptyUserFeed

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(cloneDeep(user))
    emptyUserInfo = store.getters.INFO
    emptyUserFeed = store.getters.FEED
  })

  test('getter INFO test', () => {
    expect(store.getters.INFO).toBe(emptyUserInfo)
  })

  test('getter INFO test', () => {
    expect(store.getters.FEED).toBe(emptyUserFeed)
  })

});

describe('user mutations tests', () => {
  let store
  let emptyUserInfo
  let emptyUserFeed

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(cloneDeep(user))
    emptyUserInfo = store.getters.INFO
    emptyUserFeed = store.getters.FEED
  })

  afterEach(() => {
    store.commit('clearUserInfo')
    store.commit('clearUserFeed')
  })

  test('mutation setUserInfo test', () => {
    const newInfo = {
      id:1, 
      name: 'name_1'
    }
    store.commit('setUserInfo', newInfo)
    expect( store.getters.INFO).toBe(newInfo)
  })

  test('mutation setUserFeed test', () => {
    const newFeed = {
      id:1, 
      name: 'name_1'
    }
    store.commit('setUserFeed', newFeed)
    expect( store.getters.FEED).toBe(newFeed)
  })

  test('mutation clearUserInfo test', () => {
    const newInfo = {
      id:1, 
      name: 'name_1'
    }
    store.commit('setUserInfo', newInfo)
    expect( store.getters.INFO).toBe(newInfo)
    store.commit('clearUserInfo')
    expect( store.getters.INFO).toEqual(emptyUserInfo)
  })

  test('mutation clearUserFeed test', () => {
    const newFeed = {
      id:1, 
      name: 'name_1'
    }
    store.commit('setUserFeed', newFeed)
    expect( store.getters.FEED).toBe(newFeed)
    store.commit('clearUserFeed')
    expect( store.getters.FEED).toEqual(emptyUserFeed)
  })

});
