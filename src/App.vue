<template>

  <h1>Sorting Management App</h1>
<div id="nav">
    <router-link :to="{name: 'homepage'}">Home Page |</router-link>
  <router-link :to="{name: 'database'}"> Data base Employee</router-link>

</div>

 <router-view />

</template>

<script>


export default {

  data() {
    return {
     title: "Sorting Managment App",
    };
  },
  methods: {
 
  },
};
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
#nav {
  padding: 30px;
}
</style>
