import { createLocalVue } from '@vue/test-utils'
import { cloneDeep } from 'lodash'
import Vuex from 'vuex'
import error from '@/store/error'

describe('index mutations tests', () => {
  let store
  let newError

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(cloneDeep(error))
    newError = new Error('error - message')
  })

  test('mutation setError test', () => {
    store.commit('setError', newError)
    expect(store.getters.ERROR).toBe(newError)
  })

  test('mutation clearError test', async () => {
    await store.commit('setError', newError)
    expect(store.getters.ERROR).toBe(newError)

    await store.commit('clearError')
    expect(store.getters.ERROR).toBe(null)
  })

});
