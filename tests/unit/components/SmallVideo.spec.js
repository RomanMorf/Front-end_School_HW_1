import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'

import SmallVideo from '@/components/SmallVideo.vue'
import Loader from '@/components/Loader.vue'

const localVue = createLocalVue()
localVue.component("Loader", Loader);
localVue.use(Vuex)
localVue.filter('short', (val) => val)


describe('Card component tests', () => {
  let getters
  let store
  let wrapper
  let video
  let volume

  window.HTMLMediaElement.prototype.load = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.addTextTrack = () => { /* do nothing */ };

  beforeEach(()=> {
    volume = 30
    video = {
      videoUrl: 'http://some.video.mp4',
      authorMeta: {
        heart: 100000000
      }
    }
    getters = {
      VOLUME: () => 50,
      MUTED: () => false,
    }
    store = new Vuex.Store({ getters })

    wrapper = mount(SmallVideo, { 
      localVue, 
      store, 
      propsData: { 
        video,
        volume
      }
    })
  })

  it('is component SmallVideo exist', () => {
    expect(wrapper.is(SmallVideo)).toBe(true)
  }); 

  it('does component SmallVideo has next classes', () => {
    expect(wrapper.find('.slot_wrapper').exists()).toBe(true)
    expect(wrapper.find('.slot_video').exists()).toBe(true)
    expect(wrapper.find('.slot_text').exists()).toBe(true)
  });

  it('check lodader component exist', () => {
    expect(wrapper.findComponent(Loader).exists()).toBe(true)
  });

  it('check hideLoader function', async () => {
    expect( wrapper.vm.loading).toBe(true)
    wrapper.vm.hideLoader()
    expect( wrapper.vm.loading).toBe(false)
  });

  it('component tests with mouse actions ("mouseenter", "mouseleave") ', async () => {
    expect(wrapper.vm.isPlay).toBe(false)

    await wrapper.find('.slot_video').trigger('mouseenter')
    expect(wrapper.vm.isPlay).toBe(true)

    await wrapper.find('.slot_video').trigger('mouseleave')
    expect(wrapper.vm.isPlay).toBe(false)
  });

});
