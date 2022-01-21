import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Loader from '@/components/Loader.vue'
import Home from '@/views/Home.vue'

const localVue = createLocalVue()
localVue.component("Loader", Loader);
localVue.use(Vuex)
localVue.use(VueRouter)

localVue.filter('short', (val) => val)


describe('Home component tests', () => {
  let wrapper
  let getters
  let actions
  let store

  const trengings = [
    {
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
    },
    {
      id:2, 
      text: '#111dsgsdfg #222fgdsfg',
      authorMeta: {
        name: 'user_2',
        nickName: 'nickname_2',
        avatar: "http://user_2.img.blabla", 
        verified: true,
        heart: 10000,
      },
      musicMeta: {
        musicName: 'original sound - text',
        musicAuthor: 'musicAuthor_2',
      },
      hashtags: [
        {id: 'id-21', name: 'hashtags_2' },
        {id: 'id-22', name: 'hashtags_2' },
        {id: 'id-23', name: 'hashtags_3' },
      ],
      videoUrl: 'http://video_1.blabla.mp4',
      commentCount: 100000,
      shareCount: 1000000,
    }
  ]

  beforeEach(()=> {
    getters = {
      VOLUME: () => 50,
      MUTED: () => false,
      TRENDING: () => trengings
    }
    actions = {
    GET_TRENDING_FEED: () => {/* do something */}
    }
    store = new Vuex.Store({ getters, actions })
    wrapper = shallowMount(Home, { localVue, store } )
  })

  it('is Home component exist', () => {
    expect(wrapper.is(Home)).toBe(true)
  });

  it('does component Home has next classes', () => {
    expect(wrapper.find('.video').exists()).toBe(true)
    expect(wrapper.find('.video_container').exists()).toBe(true)
  });
});


