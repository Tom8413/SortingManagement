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
    <EmployeeList />
  </div>
  
</template>

<script>
import axios from "axios";
import AddEmployeeData2 from "./AddEmployeeData2.vue";
import EmployeeList from "./EmployeeList.vue";

export default {
  name: "dataBaseEmployee",
  components: { AddEmployeeData2, EmployeeList },

  data() {
    return {

      showFormEmployee: false,
    };
  },
  methods: {
  
    ActiveFormEmployee() {
      this.showFormEmployee = !this.showFormEmployee;
    },
}
}
</script>

<style>

</style>