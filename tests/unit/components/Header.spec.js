import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header component tests', () => {
  const wrapper = shallowMount(Header)

  it('is Header component exist', () => {
    expect(wrapper.is(Header)).toBe(true)
  });

  it('does component header has next classes', () => {
    expect(wrapper.find('.header_container').exists()).toBe(true)
    expect(wrapper.find('.header_content').exists()).toBe(true)
    expect(wrapper.find('.header_logo').exists()).toBe(true)
    expect(wrapper.find('.header_link').exists()).toBe(true)
    expect(wrapper.find('.header_search').exists()).toBe(true)
    expect(wrapper.find('.header_form').exists()).toBe(true)
    expect(wrapper.find('.header_input-split').exists()).toBe(true)
    expect(wrapper.find('.header_input-btn').exists()).toBe(true)
    expect(wrapper.find('.header-input-svg').exists()).toBe(true)
    expect(wrapper.find('.header_menu').exists()).toBe(true)
    expect(wrapper.find('.header_upload').exists()).toBe(true)
    expect(wrapper.find('.header_login').exists()).toBe(true)
    expect(wrapper.find('.header_icon').exists()).toBe(true)
  });
});

