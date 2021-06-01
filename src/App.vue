<template>
  <Header/>
  <AddTask/>
  <ListTask/>
</template>

<script>
import AddTask from './components/AddTask'
import ListTask from './components/ListTask'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    AddTask,
    ListTask,
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
