<template>
  <div class="tasks-container">
    <template  v-if="tasks.length">
      <div class="task-list-container" v-for="item in tasks" :key="item.ID">
        <div class="task-text">
          {{ item.ID }} &nbsp;:&nbsp; {{ item.Task }}
        </div>
        <button type="button" v-on:click="delTask(item.ID)"> -</button>
      </div>
    </template>
    <template v-else>
      <div class="no-task">
        No Tasks available to show
      </div>
    </template>

  </div>

</template>

<script>
import { TaskService } from '../service/TaskService'

export default {
  name: 'ListTask',
  computed: {
    tasks () {
      return this.$store.state.tasks
    }
  },
  methods: {
    delTask (id) {
      const task = new TaskService()
      task.deleteTask(id).then(response => {
        this.$store.state.tasks = response
      }, error => {
        console.log(error)
      })
    }
  }
}

</script>

<style scoped>
.tasks-container{
  max-width: 1200px;
  margin: 20px auto;
}
.task-list-container > button {
  font-size: 24px;
  background-color: #eee;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  line-height: 8px;
  display: block;
}
.task-list-container {
  margin-top: 20px;
  font-size: 20px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 7px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 15px;
  background-color: #fcfcfc;
}
.no-task {
  font-size: 25px;
  margin-top: 20px;
}
.task-text{
  padding-left: 10px;
  padding-right: 20px;
  max-width: 90%;
}
</style>
