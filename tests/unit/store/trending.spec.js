import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash'
import trending from '@/store/trending.js'

import { getTrandingFeed } from '@/api/rapidapi-services.js'

jest.mock('@/api/rapidapi.js', () => {
  return jest.fn(() => {
    return {data: 'some data'}
  })
})

describe('trending getters test', () => {
  let store
  let emptyTrendings

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(cloneDeep(trending))
    emptyTrendings = store.getters.TRENDING
  })

  test('getter TRENDING test', () => {
    expect(store.getters.TRENDING).toBe(emptyTrendings)
  })

});

describe('trending mutations test', () => {
  let store
  let emptyTrendings
  const TrendingWithData = [
    {id: 1, name: 'name_1'},
    {id: 2, name: 'name_2'},
  ]

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(cloneDeep(trending))
    emptyTrendings = store.getters.TRENDING
  })

  test('mutations setTrendingInfo test', () => {
    expect(store.getters.TRENDING).toBe(emptyTrendings)
    
    store.commit('setTrendingInfo', TrendingWithData)
    expect(store.getters.TRENDING).toBe(TrendingWithData)
  })

  test('mutations clearTrendingInfo test', () => {
    store.commit('setTrendingInfo', TrendingWithData)
    expect(store.getters.TRENDING).toBe(TrendingWithData)

    store.commit('clearTrendingInfo')
    expect(store.getters.TRENDING).toEqual(emptyTrendings)
  })

});

describe('trending action test', () => {
  let store

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(cloneDeep(trending))
  })


  test('mutations clearTrendingInfo test', async () => {
    const p = await getTrandingFeed()
  })

});

