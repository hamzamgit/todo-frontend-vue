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
  /*background: rgb(9,6,65);
   background: linear-gradient(133deg, rgba(9,6,65,1) 0%, rgba(58,121,9,1) 100%, rgba(0,212,255,1) 100%);*/
  background: #8360c3; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2ebf91, #8360c3); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2ebf91, #8360c3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.header p {
  align-items: center;
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.header p.logo {
  font-size: 35px;
  font-weight: bold;
}

</style>
