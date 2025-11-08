<template>
  <h1>Sorting Management App</h1>
<button v-tooltip="'You have new messages.'" > UseMe or no</button>

  <div v-if="showForm">
    <AddEmployeeData @closeFormEmit="ActiveForm" :limit="limit"/>
  </div>
  <label>
    <button type="button" @click="ActiveForm">Add Employee</button>
  </label>
  <employeeData @EmitDataLimit="ReciveDataFormChild"/>
</template>

<script>
import AddEmployeeData from "./components/AddEmployeeData.vue";
import employeeData from "./components/employeeData.vue";




export default {
  name: "App",
  components: { AddEmployeeData, employeeData },

  data() {
    return {
      title: "Sorting Management hub",
      showForm: false,
      limit: false,
    };
  },
  methods: {
    ActiveForm() {
      this.showForm = !this.showForm;
    },
    ReciveDataFormChild: function(params) {
      this.limit = params;
    },
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

</style>
