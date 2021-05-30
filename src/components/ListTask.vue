<template>
  <div>
    <ul v-if="tasks.length" v-for="item in tasks" :key="item.id">
      <li>
        {{ item.task }}
      </li>
      <button> - </button>
    </ul>

  </div>

</template>

<script>
export default {
  name: 'ListTask',
  props: {
    tasks: Object
  }
}

</script>

<style scoped>

</style>
