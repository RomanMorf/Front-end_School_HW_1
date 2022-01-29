import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash'
import trending from '@/store/trending'

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
