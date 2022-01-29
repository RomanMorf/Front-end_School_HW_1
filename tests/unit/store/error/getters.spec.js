import { createLocalVue } from '@vue/test-utils'
import { cloneDeep } from 'lodash'
import Vuex from 'vuex'
import error from '@/store/error'

describe('index getters tests', () => {
  let store

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(cloneDeep(error))
  })


  test('getter ERROR test', () => {
    expect(store.getters.ERROR).toBe(null)
  })

});
