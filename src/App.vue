<template>
  <h1>Sorting Management App</h1>

  <div v-if="showFormEmployee">
    <AddEmployeeData
      @closeFormEmitEmployee="ActiveFormEmployee"
      :limit="limit"
    />
  </div>
  <label>
    <button type="button" @click="ActiveFormEmployee">Add Employee</button>
  </label>
  <employeeData @EmitDataLimit="ReciveDataFormChild" />

  <div v-if="showFormPallet">
    <AddEuroPallet 
    @closeFormEmitPallet="ActiveFormPallet" />
  </div>

  <label>
    <button type="button" @click="ActiveFormPallet">Add Euro Pallet</button>
  </label>

<euroPallet />  

 
</template>

<script>
import AddEmployeeData from "./components/AddEmployeeData.vue";
import employeeData from "./components/employeeData.vue";
import AddEuroPallet from "./components/AddEuroPallet.vue";
import euroPallet from "./components/euroPallet.vue";

export default {
  name: "App",
  components: { AddEmployeeData, employeeData, AddEuroPallet, euroPallet },

  data() {
    return {
      title: "Sorting Management hub",
      showFormEmployee: false,
      showFormPallet: false,
      limit: false,
    };
  },
  methods: {
    ActiveFormEmployee() {
      this.showFormEmployee = !this.showFormEmployee;
    },
    ActiveFormPallet() {
      this.showFormPallet = !this.showFormPallet;
    },
    ReciveDataFormChild: function (params) {
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
