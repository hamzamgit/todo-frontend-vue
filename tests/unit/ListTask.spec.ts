import {mount} from '@vue/test-utils'
import ListTask from '@/components/ListTask.vue';
import {Store} from "vuex";

describe('ListTask.vue', () => {
  const wrapper = mount(ListTask, {
    global: {
      provide: {
        store: new Store(
          {
            state: {
              tasks: []
            }
          }
        )
      }
    }
  })

  it('List is empty', () => {
    expect(wrapper.findAll('.no-task').length).toBe(1)
  })
})
