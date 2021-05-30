<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="onSubmit">
      <input type="text" placeholder="Add some Task" v-model="data.task">
      <button type="submit">ADD TASK</button>
    </form>
  </div>

</template>

<script>
export default {
  name: 'AddTask',
  data () {
    return {
      data: { task: '' }
    }
  },
  methods: {
    onSubmit () {
      console.log('this.data', this.data.task)
    }
  }
}

</script>

<style scoped>

</style>
