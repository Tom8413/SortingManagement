 <template>

 <div v-if="showFormEmployee">
    <AddEmployeeData
      @closeFormEmitEmployee="ActiveFormEmployee"
      :limitData="limitData"
    />
  </div>
  <label>
    <button type="button" @click="ActiveFormEmployee">Add Employee</button>
  </label>
  <employeeData @EmitDataLimit="ReciveDataFormChild1" />

  <div v-if="showFormPallet">
    <AddEuroPallet 
    @closeFormEmitPallet="ActiveFormPallet" 
    :limitEuroPallet="limitEuroPallet"/>
  </div>

  <label>
    <button type="button" @click="ActiveFormPallet">Add Euro Pallet</button>
  </label>

<euroPallet @EmitDataLimit="ReciveDataFormChild2" />  

</template>

<script>

import AddEmployeeData from "./AddEmployeeData.vue";
import employeeData from "./employeeData.vue";
import AddEuroPallet from "./AddEuroPallet.vue";
import euroPallet from "./euroPallet.vue";

export default {
  name: "HomePage",
  components: { AddEmployeeData, employeeData, AddEuroPallet, euroPallet },

  data() {
    return {
      showFormEmployee: false,
      showFormPallet: false,
      limitData: false,
      limitEuroPallet: false,
    };
  },
  methods: {
    ActiveFormEmployee() {
      this.showFormEmployee = !this.showFormEmployee;
    },
    ActiveFormPallet() {
      this.showFormPallet = !this.showFormPallet;
    },
    ReciveDataFormChild1: function (params) {
      this.limitData = params;
    },
    ReciveDataFormChild2: function (params) {
      this.limitEuroPallet = params;
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
#nav {
  padding: 30px;
}
</style>
