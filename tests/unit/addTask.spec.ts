import {mount, shallowMount} from '@vue/test-utils'
import store from '@/store'
import AddTask from '@/components/AddTask.vue';

let wrapper: any

beforeAll(
  () => {
    wrapper = mount(AddTask, {
      global: {
        provide: {
          store: store
        }
      }
    })
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

  it('Hit Backend with Task data and update store', () => {
    const input = wrapper.find('input[type="text"]')
    input.instance().value = 'Hello'
    const addButton = wrapper.fin('button[type="submit"]')
    addButton.trigger('click')
    expect(wrapper.find('button[type="submit"]')).toBeTruthy()
  })


})
