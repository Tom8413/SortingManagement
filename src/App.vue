<template>
  <h1>Sorting Management App</h1>

<div v-for="item in items" :key="item.id">
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
        <span v-bind="attrs" v-on="on">Hover to View</span>
    </template>
    <span>{{ item.name }}</span>
  </v-tooltip>
</div>

<button v-tooltip="coś"/>
       
<div>
<v-tooltip v-for="test in tests2" v-bind:key="test">

<button  > UseMe or no</button>
<p>{{title}}</p>
</v-tooltip>
 </div>
<v-btn>
  botton
</v-btn>


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
      tests2: ["baran", "kozak", "goofy", "maslo"],
      tests: [{id1:"test1"}, {id:"test2"}, {id:"test3"}, {id:"test4"}, {id:"test5"}],
      show: true,
       items: [
        { id: 1, name: 'Item 1', description: 'This is item 1.' },
        { id: 2, name: 'Item 2', description: 'This is item 2.' },
      ],
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
