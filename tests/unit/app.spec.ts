import {mount, shallowMount} from '@vue/test-utils'
import App from '@/App.vue'

let wrapper: any

beforeAll(
  () => {
    wrapper = mount(App)
  }
)

afterAll(
  () => {
    wrapper = null
  }
)

describe('App.vue', () => {
  it('Input field is rendered ', () => {
    const input = wrapper.find('input[type="text"]')
    expect(input).toBeTruthy()
  })

  it('Renders add task button', () => {
    expect(wrapper.find('button[type="submit"]')).toBeTruthy()
  })

  it('Check if list is empty', () => {
    expect(wrapper.findAll('.no-task').length).toBe(1)
  })

})
