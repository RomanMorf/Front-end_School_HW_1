import { createLocalVue, mount } from '@vue/test-utils'
import Card from '@/components/Card.vue'
import Loader from '@/components/Loader.vue'

import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.filter('short', (val) => val)
localVue.component("Loader", Loader);

localVue.use(Vuex)

let item = {
  id:1, 
  text: '#111dsgsdfg #222fgdsfg',
  authorMeta: {
    name: 'user_1',
    nickName: 'nickname_1',
    avatar: "http://user_1.img.blabla", 
    verified: true,
    heart: 10000,
  },
  musicMeta: {
    musicName: 'original sound - text',
    musicAuthor: 'musicAuthor_1',
  },
  hashtags: [
    {id: 'id-1', name: 'hashtags_1' },
    {id: 'id-2', name: 'hashtags_2' },
    {id: 'id-3', name: 'hashtags_3' },
  ],
  videoUrl: 'http://video_1.blabla.mp4',
  commentCount: 100000,
  shareCount: 1000000,
}

describe('Card component tests', () => {
  let getters
  let actions
  let store
  let wrapper

  beforeEach(()=> {
    getters = {
      VOLUME: () => 50,
      MUTED: () => false,
    }
    actions = {
      SET_MUTED: () => {/*  */},
      SET_VOLUME: () => {/*  */}
    }
    store = new Vuex.Store({
      getters, actions
    })
    wrapper = mount(Card, { localVue, store, propsData: {item: item}} )
  })

  afterEach(()=> {
    item = {
      id:1, 
      text: '#111dsgsdfg #222fgdsfg',
      authorMeta: {
        name: 'user_1',
        nickName: 'nickname_1',
        avatar: "http://user_1.img.blabla", 
        verified: true,
        heart: 10000,
      },
      musicMeta: {
        musicName: 'original sound - text',
        musicAuthor: 'musicAuthor_1',
      },
      hashtags: [
        {id: 'id-1', name: 'hashtags_1' },
        {id: 'id-2', name: 'hashtags_2' },
        {id: 'id-3', name: 'hashtags_3' },
      ],
      videoUrl: 'http://video_1.blabla.mp4',
      commentCount: 100000,
      shareCount: 1000000,
    }
  })

  it('is component Card exist', () => {
    expect(wrapper.is(Card)).toBe(true)
  }); 

  it('does component Card has next classes', () => {
    expect(wrapper.find('.card').exists()).toBe(true)
    expect(wrapper.find('.card_link').exists()).toBe(true)
    expect(wrapper.find('.card_avatar').exists()).toBe(true)
    expect(wrapper.find('.card_subscribe').exists()).toBe(true)
    expect(wrapper.find('.card_body').exists()).toBe(true)
    expect(wrapper.find('.card_autor').exists()).toBe(true)
    expect(wrapper.find('.card_meta-video').exists()).toBe(true)
    expect(wrapper.find('.card_meta-text').exists()).toBe(true)
    expect(wrapper.find('.card_meta-hashtag').exists()).toBe(true)
    expect(wrapper.find('.card_meta-audio').exists()).toBe(true)
    expect(wrapper.find('.card_meta-audio-info').exists()).toBe(true)
    expect(wrapper.find('.card_meta-audio-autor').exists()).toBe(true)
    expect(wrapper.find('.card_video').exists()).toBe(true)
    expect(wrapper.find('.card_video-item').exists()).toBe(true)
    expect(wrapper.find('.card_video-muted').exists()).toBe(true)
    expect(wrapper.find('.card_video-volume').exists()).toBe(true)
    expect(wrapper.find('.card_video-btn').exists()).toBe(true)
    expect(wrapper.find('.card_video-actions').exists()).toBe(true)
    expect(wrapper.find('.card_video-actions-btn').exists()).toBe(true)
    expect(wrapper.find('.card_video-actions-text').exists()).toBe(true)
  });

  it('dont show verified img when user is not verified', async () => {
    await wrapper.setProps( item.authorMeta.verified = false )
    expect(wrapper.find('.verified').exists()).toBe(false)
  });
  
  it('show verified img when user is verified', async () => {
    await wrapper.setProps( item.authorMeta.verified = true )
    expect(wrapper.find('.verified').exists()).toBe(true)
  });

  it('check muted img when MUTED is false', () => {
    expect(wrapper.find('.card_video-muted img').attributes().alt).toBe('muted off')
  });

  it('check muted img when MUTED is true', () => {
    getters = {
      VOLUME: () => 50,
      MUTED: () => true,
    }
    actions = {
      SET_MUTED: jest.fn(),
      SET_VOLUME: jest.fn(),
    }
    store = new Vuex.Store({ getters, actions })

    wrapper = mount(Card, { localVue, store, propsData: {item: item}} )
  
    expect(wrapper.find('.card_video-muted img').attributes().alt).toBe('muted on')
  });

  it('check avatar url', () => {
    expect(wrapper.find('.card_avatar').attributes().src).toBe(item.authorMeta.avatar)
  });

  it('check card meta text', () => {
    expect(wrapper.find('.card_meta-audio-info').text()).toBe(item.musicMeta.musicName + ' - ' + item.musicMeta.musicAuthor)
    expect(wrapper.find('h4').text()).toBe(item.authorMeta.nickName)
  });

  it('check all "card_video-actions-text"', () => {
    const cardVideoTexts = wrapper.findAll('.card_video-actions-text')

    expect(cardVideoTexts.at(0).text()).toBe('10000')
    expect(cardVideoTexts.at(1).text()).toBe('100000')
    expect(cardVideoTexts.at(2).text()).toBe('1000000')
  });

  it('check hideLoader function', async () => {
    expect( wrapper.vm.loading).toBe(true)
    wrapper.vm.hideLoader()
    expect( wrapper.vm.loading).toBe(false)
  });

});


describe('Card video buttons', () => {
  let getters
  let actions
  let store
  let wrapper
  let playToggle
  let mutedToggle
  let setVolume
  let playerPlay
  let playerPause

  window.HTMLMediaElement.prototype.load = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.addTextTrack = () => { /* do nothing */ };

  beforeEach(()=> {
    getters = {
      VOLUME: () => 50,
      MUTED: () => false,
    }
    actions = {
      SET_MUTED: () => {/*  */},
      SET_VOLUME: () => {/*  */}
    }
    store = new Vuex.Store({
      getters, actions
    })
    wrapper = mount(Card, { localVue, store, propsData: {item: item}} )
    playToggle = jest.spyOn(wrapper.vm, 'playToggle');
    mutedToggle = jest.spyOn(wrapper.vm, 'mutedToggle');
    setVolume = jest.spyOn(wrapper.vm, 'setVolume');
    playerPlay = jest.spyOn(wrapper.vm, 'playerPlay');
    playerPause = jest.spyOn(wrapper.vm, 'playerPause');
  })

  afterEach(()=> {
    item = {
      id:1, 
      text: '#111dsgsdfg #222fgdsfg',
      authorMeta: {
        name: 'user_1',
        nickName: 'nickname_1',
        avatar: "http://user_1.img.blabla", 
        verified: true,
        heart: 10000,
      },
      musicMeta: {
        musicName: 'original sound - text',
        musicAuthor: 'musicAuthor_1',
      },
      hashtags: [
        {id: 'id-1', name: 'hashtags_1' },
        {id: 'id-2', name: 'hashtags_2' },
        {id: 'id-3', name: 'hashtags_3' },
      ],
      videoUrl: 'http://video_1.blabla.mp4',
      commentCount: 100000,
      shareCount: 1000000,
    }
  })

  it('check video playToggle buttons', () => {
    wrapper.find('video.card_video-item').trigger('click')
    expect(playToggle).toHaveBeenCalled()
  });

  it('check video mutedToggle button', async () => {
    await wrapper.find('span.card_video-muted').trigger('click')
    expect(mutedToggle).toHaveBeenCalled()
  });

  it('check video setVolume button', async () => {
    await wrapper.find('input.card_video-volume').trigger('change')
    expect(setVolume).toHaveBeenCalled()
  });

  it('check video playerPlay button', async () => {
    await wrapper.setData({ isPlay: false })
    await wrapper.find('span.card_video-btn').trigger('click')
    expect(playerPlay).toHaveBeenCalled()
  });

  it('check video playerPause button', async () => {
    await wrapper.setData({ isPlay: true })
    await wrapper.find('span.card_video-btn').trigger('click')    
    expect(playerPause).toHaveBeenCalled()
  });

});