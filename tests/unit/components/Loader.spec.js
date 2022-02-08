import { shallowMount } from '@vue/test-utils'
import Loader from '@/components/Loader.vue'

describe('Loader component tests', () => {
  const wrapper = shallowMount(Loader)

  it('is component Loader exist', () => {
    expect(wrapper.is(Loader)).toBe(true)
  });

  it('does component Loader has next classes', () => {
    expect(wrapper.find('.loader_wrapper').exists()).toBe(true)
    expect(wrapper.find('.lds-roller').exists()).toBe(true)
  });
});
