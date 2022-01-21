import { createLocalVue, mount } from '@vue/test-utils'
import SideBar from '@/components/SideBar.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

describe('SideBar component tests', () => {
  let getters
  let store
  let wrapper
  let spy
  let TRENDING

  beforeEach(()=> {
    getters = {
      TRENDING: () => [
        { id:1, 
          authorMeta: {
            name: 'user_1',
            nickName: 'nickname_1',
            avatar: "http://user_1.img.blabla", 
            verified: true
          }
        },
        { id:2, 
          authorMeta: {
            name: 'user_2',
            nickName: 'nickname_2',
            avatar: "http://user_2.img.blabla", 
            verified: false
          }
        },
      ],
    }
    store = new Vuex.Store({
      getters
    })
    wrapper = mount(SideBar, { localVue, store })
    wrapper.vm.goToUserProfile = jest.fn(name => 'regirect ro /profile/' + name)
    spy = jest.spyOn(wrapper.vm, 'goToUserProfile');
    TRENDING = getters.TRENDING()
  })

  it('does component header has next classes', () => {
    expect(wrapper.find('.sidebar_container').exists()).toBe(true)
    expect(wrapper.find('.sidebar_content').exists()).toBe(true)
    expect(wrapper.find('.sidebar_list').exists()).toBe(true)
    expect(wrapper.find('.sidebar_list-text').exists()).toBe(true)
    expect(wrapper.find('.sidebar_list-text').exists()).toBe(true)
    expect(wrapper.find('.sidebar_recomend').exists()).toBe(true)
    expect(wrapper.find('.sidebar_recomend-title').exists()).toBe(true)
    expect(wrapper.find('.sidebar_recomend-container').exists()).toBe(true)
    expect(wrapper.find('.sidebar_recomend-list').exists()).toBe(true)
    expect(wrapper.find('.sidebar_recomend-item').exists()).toBe(true)
    expect(wrapper.find('.sidebar_recomend-link').exists()).toBe(true)
    expect(wrapper.find('.sidebar_recomend-avatar').exists()).toBe(true)
    expect(wrapper.find('.sidebar_recomend-info').exists()).toBe(true)
    expect(wrapper.find('.sidebar_hashtags').exists()).toBe(true)
    expect(wrapper.find('.sidebar_hashtags-title').exists()).toBe(true)
  });

  it('link tests func - goToUserProfile', () => {
    wrapper.find('.sidebar_recomend-link').trigger('click')
    
    expect(spy).toHaveBeenCalled();
  });

  it('second link tests func - goToUserProfile', () => {
    wrapper.findAll('.sidebar_recomend-info-link').at(1).trigger('click')

    expect(spy).toHaveBeenCalled();
  });

  it('checks correct verified users icon displayed', () => {
    const arr = wrapper.findAll('.verified')

    expect(arr.at(0).exists()).toBe(true)
    expect(arr.length).toBe(1)
  });

  it('checks correct users names displayed', () => {
    const h3Array = wrapper.findAll('h3')

    expect(h3Array.at(0).text()).toBe(TRENDING[0].authorMeta.name)
    expect(h3Array.at(1).text()).toBe(TRENDING[1].authorMeta.name)
  });

  it('checks correct users nickNames displayed', () => {
    const h4Array = wrapper.findAll('h4')

    expect(h4Array.at(1).text()).toBe(TRENDING[0].authorMeta.nickName)
    expect(h4Array.at(2).text()).toBe(TRENDING[1].authorMeta.nickName)
  });

  it('checks correct users avatars url displayed', () => {
    const imgArray = wrapper.findAll('.sidebar_recomend-avatar')

    expect(imgArray.at(0).attributes().src).toBe(TRENDING[0].authorMeta.avatar)
    expect(imgArray.at(1).attributes().src).toBe(TRENDING[1].authorMeta.avatar)
  });

});