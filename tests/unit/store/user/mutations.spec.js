import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash'
import user from '@/store/user'

describe('user mutations tests', () => {
  let store

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(cloneDeep(user))
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

});
