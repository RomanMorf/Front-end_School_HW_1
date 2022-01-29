import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Loader from '@/components/Loader.vue'
import Profile from '@/views/Profile.vue'

const localVue = createLocalVue()
localVue.component("Loader", Loader);
localVue.use(Vuex)
localVue.use(VueRouter)

localVue.filter('short', (val) => val)


describe('Profile component tests', () => {
  let wrapper
  let getters
  let actions
  let store

  const info = {
    id:1, 
    text: '#111dsgsdfg #222fgdsfg',
    user: {
      name: 'user_1',
      nickName: 'nickname_1',
      avatarLarger: "http://user_1.img.blabla",
      avatarMedium: "http://user_1.img.medium.blabla",
      avatarThumb: "http://user_1.img.medium.blabla",
      uniqueId: 'uniqueId_id',
      verified: true,
      heart: 10000,
      signature: 'some signature',
      bioLink: {
        link: 'some biolink'
      }
    },
    stats: {
      followingCount: 100000,
      followerCount: 1000000,
      heartCount: 10000000,
    },
    videoUrl: 'http://video_1.blabla.mp4',
    commentCount: 100000,
    shareCount: 1000000,
  }
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
      GET_VOLUME: () => 30,
      GET_MUTED: () => false,
      INFO: () => info,
      FEED: () => {/* do something */},
      TRENDING: () => trengings,
    }
    actions = {
      GET_TRENDING_FEED: () => {/* do something */},
      GET_USER_INFO: () => {/* do something */},
      GET_USER_FEED: () => {/* do something */},
      SET_MUTED: () => {/* do something */},
    }
    const router = new VueRouter()
    store = new Vuex.Store({ getters, actions })
    wrapper = shallowMount(Profile, { localVue, store, router })
    wrapper.vm.loading = false
  })
  
  it('is Home component exist', () => {
    expect(wrapper.is(Profile)).toBe(true)
  });

  it('does component Profile has next classes', () => {
    expect(wrapper.find('.profile').exists()).toBe(true)
    expect(wrapper.find('.profile_header').exists()).toBe(true)
    expect(wrapper.find('.profile_info').exists()).toBe(true)
    expect(wrapper.find('.profile_img').exists()).toBe(true)
    expect(wrapper.find('.profile_img-item').exists()).toBe(true)
    expect(wrapper.find('.profile_name').exists()).toBe(true)
    expect(wrapper.find('.profile_name-title').exists()).toBe(true)
    expect(wrapper.find('.profile_name-subtitle').exists()).toBe(true)
    expect(wrapper.find('.profile_name-follow').exists()).toBe(true)
    expect(wrapper.find('.profile_count').exists()).toBe(true)
    expect(wrapper.find('.profile_count-item').exists()).toBe(true)
    expect(wrapper.find('.profile_desc').exists()).toBe(true)
    expect(wrapper.find('.profile_link').exists()).toBe(true)
    expect(wrapper.find('.main').exists()).toBe(true)
  });

  it('check text in profile_name-subtitle', () => {
    expect(wrapper.find('.profile_name-subtitle').text()).toBe(info.user.uniqueId)
  });

  it('check texts in profile_count', () => {
    const profileCounts = wrapper.findAll('.profile_count-item')
    expect(profileCounts.at(0).text()).toBe(info.stats.followingCount + ' Подписки')
    expect(profileCounts.at(1).text()).toBe(info.stats.followerCount + ' Подписчики')
    expect(profileCounts.at(2).text()).toBe(info.stats.heartCount + ' Лайки')
  });

  it('check text in profile_link', () => {
    expect(wrapper.find('.profile_link a').text()).toBe(info.user.bioLink.link)
  });
});


