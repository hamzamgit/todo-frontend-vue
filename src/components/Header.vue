<template>
  <div class="header">
    <p class="logo">THE TODO APP</p>
  </div>
</template>

<script>
export default {
  name: 'Header'
}

</script>

<style scoped>
.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}

.header p {
  align-items: center;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.header p.logo {
  font-size: 25px;
  font-weight: bold;
}

</style>
