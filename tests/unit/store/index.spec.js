import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import index from '@/store/index.js'


describe('index getters tests', () => {
  let store

  beforeEach(() => {
    store = index
    const localVue = createLocalVue()
    localVue.use(Vuex)
  })

  test('getter ERROR test', () => {
    expect(store.getters.ERROR).toBe(null)
  })

});

describe('index mutations tests', () => {
  let store
  let newError


  beforeEach(() => {
    store = index
    const localVue = createLocalVue()
    localVue.use(Vuex)
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
