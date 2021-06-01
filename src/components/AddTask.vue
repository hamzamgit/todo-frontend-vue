<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="onSubmit">
      <input type="text" placeholder="Add some Task" v-model="data.task">
      <button type="submit">ADD TASK</button>
    </form>
  </div>

</template>

<script>

import { TaskService } from '../service/TaskService'

export default {
  name: 'AddTask',
  data () {
    return {
      data: { task: '' }
    }
  },
  methods: {
    onSubmit () {
      if (this.data.task) {
        const task = {
          task: this.data.task,
          completed: false
        }
        console.log(task)
        const service = new TaskService()
        service.createTask(task).then(
          response => {
            console.log(response)
            this.$store.state.tasks.push(
              {
                Task: this.data.task,
                id: Math.random(),
                Completed: false
              }
            )
            this.data.task = ''
          }, error => {
            console.log(error)
          }
        )
      } else {
        console.log('empty data!')
      }
    }
  }
}

</script>

<style scoped>
.md-layout {
  max-width: 1200px;
  margin: 50px auto 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 30px;
  margin-bottom: 10px;
}

.md-layout > input, .md-layout > button {
  padding: 8px 15px;
  border-radius: 7px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid transparent;
  min-height: 50px;
  box-sizing: border-box;
  font-size: 18px;
}

.md-layout > input:focus, .md-layout > button:focus {
  outline: none;
  border: 1px solid #eee;
}

.md-layout > input {
  width: 100%;
}

.md-layout > button {
  margin-left: 20px;
  min-width: 200px;
  cursor: pointer;
  color: white;
  background-color: #0a5f0a;
}
</style>
