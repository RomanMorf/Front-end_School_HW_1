import { shallowMount,  createLocalVue } from '@vue/test-utils'
import NotFound from '@/views/NotFound.vue'
import VueRouter from 'vue-router'


describe('NotFound component tests', () => {
  let wrapper
  let spy
  let router

  beforeEach(()=> {
    const localVue = createLocalVue()
    router = new VueRouter()
    localVue.use(VueRouter)

    wrapper = shallowMount(NotFound, { localVue, router })
    wrapper.vm.goToMainPage = jest.fn()
    spy = jest.spyOn(wrapper.vm, 'goToMainPage');
  })

  it('is NotFound component exist', () => {
    expect(wrapper.is(NotFound)).toBe(true)
  });

  it('does component NotFound has next classes', () => {
    expect(wrapper.find('.not_found').exists()).toBe(true)
  });

  it('component texts check', () => {
    expect(wrapper.find('h2').text()).toBe('Упс... Что-то пошло не так :)');
    expect(wrapper.find('h3').text()).toBe('На главную страницу');
  });

  it('goToMainPage func link press test', async () => {
    await wrapper.find('h3').trigger('click')

    expect(spy).toHaveBeenCalled();
  });

});


