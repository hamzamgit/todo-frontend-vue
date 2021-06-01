import { mount, shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'THE TODO APP'
    const wrapper = mount(Header, {
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
