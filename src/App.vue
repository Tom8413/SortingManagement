<template>
<h1>cvbcvbcvbcvb</h1>

<AddEmployeeData />
</template>

<script>
import AddEmployeeData from './components/AddEmployeeData.vue'



export default {
  name: 'App',
  components: { AddEmployeeData},

  data() {
    return {
      title: "Sorting Management hub"
    }
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
</style>
