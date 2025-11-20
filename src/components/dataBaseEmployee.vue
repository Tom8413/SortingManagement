<template>
  <div v-if="showFormEmployee">
    <AddEmployeeData2
      @closeFormEmitEmployee="ActiveFormEmployee"
    />
  </div>
    <label>
    <button type="button" @click="ActiveFormEmployee">Add Employee</button>
  </label>
  <div>
    <EmployeeList @EmitDataEmployee="ReciveDataEmployee" /> <!--recive data from child - EmployeeList--> 
  </div>
  
</template>

<script>
import AddEmployeeData2 from "./AddEmployeeData2.vue";
import EmployeeList from "./EmployeeList.vue";

export default {
  name: "dataBaseEmployee",
  components: { AddEmployeeData2, EmployeeList },

  data() {
    return {
      showFormEmployee: false,
      dataEmployee: [],
    };
  },
  methods: {
    ActiveFormEmployee() {
      this.showFormEmployee = !this.showFormEmployee;
    },
    ReciveDataEmployee: function(params) {
      this.dataEmployee = params;
    }
},
  updated() {
        this.$emit("EmitDataPTA", this.dataEmployee) //emit data from parent to Ancestor
      }
}
</script>

<style>

</style>