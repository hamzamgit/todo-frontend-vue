import RequestManager from '../service/RequestManager'
import { Task } from '../models/models'

export class TaskService {
  private LIST_OF_TASKS = '/tasks/list'
  private TASK = '/task/'
  private CREATE_TASK = '/task/gen'
  private DELETE_TASK = '/task/del/'

  getTasks () {
    return RequestManager.get(this.LIST_OF_TASKS)
  }

  detailsTask (id: number) {
    return RequestManager.details(this.TASK, id)
  }

  createTask (task: any) {
    return RequestManager.post(this.CREATE_TASK, task)
  }

  deleteTask (id) {
    return RequestManager.delete(this.DELETE_TASK, id)
  }
}
