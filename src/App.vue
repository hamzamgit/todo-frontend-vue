<template>
  <Header/>
  <AddTask/>
  <ListTask :tasks="tasks"/>
</template>

<script>
import AddTask from './components/AddTask'
import ListTask from './components/ListTask'
import Header from './components/Header'

export default {
  name: 'App',
  data: () => {
    return {
      tasks: [
        { id: 1, task: 'name is here' },
        { id: 2, task: 'name is here' },
        { id: 3, task: 'name is here' },
        { id: 4, task: 'name is here' }
      ]
    }
  },

  components: {
    AddTask,
    ListTask,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
