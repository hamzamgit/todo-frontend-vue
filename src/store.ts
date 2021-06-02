import { Store } from 'vuex'
import { TaskService } from '../src/service/TaskService'

const store = new Store(
  {
    state: {
      tasks: []
    }
  }
)

const service = new TaskService()
service.getTasks().then(
  response => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.state.tasks = response
  },
  error => {
    console.log(error)
  }
)
export default store
