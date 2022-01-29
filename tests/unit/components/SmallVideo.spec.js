import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
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

  window.HTMLMediaElement.prototype.load = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.addTextTrack = () => { /* do nothing */ };

  video = {
    videoUrl: 'http://some.video.mp4',
    authorMeta: {
      heart: 100000000
    }
  }

  getters = {
    GET_VOLUME: () => 30,
    GET_MUTED: () => false,
  }

  store = new Vuex.Store({ getters })

  wrapper = shallowMount(SmallVideo, { 
    localVue, 
    store, 
    propsData: { 
      video,
    }
  })

  it('is component SmallVideo exist', () => {
    expect(wrapper.is(SmallVideo)).toBe(true)
  }); 

  it('does component SmallVideo has next classes', () => {
    expect(wrapper.find('.slot_wrapper').exists()).toBe(true)
    expect(wrapper.find('.slot_video').exists()).toBe(true)
    expect(wrapper.find('.slot_text').exists()).toBe(true)
  });

  it('component tests with mouse actions ("mouseenter", "mouseleave") ', async () => {
    const video = wrapper.findAll('.slot_video')

    expect(wrapper.vm.isPlay).toBe(false)
    
    await video.at(1).trigger('mouseenter')
    expect(wrapper.vm.isPlay).toBe(true)

    await video.at(1).trigger('mouseleave')
    expect(wrapper.vm.isPlay).toBe(false)
  });

});
