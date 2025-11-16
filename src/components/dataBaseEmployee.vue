<template>
  <div v-if="showFormEmployee">
    <AddEmployeeData
      @closeFormEmitEmployee="ActiveFormEmployee"
    />
  </div>
  <label>
    <button type="button" @click="ActiveFormEmployee">Add Employee</button>
  </label>

  <div class="container">
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>ID number</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in AllData" :key="index"> 
          <td>{{ data.first_name }}</td>
          <td>{{ data.last_name }}</td>
          <td>{{ data.ID_number }}</td>
          <td>{{ data.Department }}</td>
          <td><button @click="deleteData(data, data._id)">Delete</button></td>
          <td><button @click="SendDataToDepartment(index)">Send data to department</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import AddEmployeeData from "./AddEmployeeData.vue";

export default {
  name: "dataBaseEmployee",
  components: { AddEmployeeData },

  data() {
    return {
      reciveData: [],
      limit: 200,
      showFormEmployee: false,
    };
  },
  methods: {
    deleteData(reciveData, _id) {
      axios
        .delete("http://localhost:3000/delete-employee/" + _id)
        .then((response) => {
          return console.log(response);
        })
        .catch((error) => console.log(error));

      //window.location.reload();
    },
    ActiveFormEmployee() {
      this.showFormEmployee = !this.showFormEmployee;
    },
    SendDataToDepartment(index) {
      this.$emit("EmitDataEmployee", reciveData[index]._id);
    },
  },
  created() {
    axios
      .get("http://localhost:3000/show-employee")
      .then((response) => {
        this.reciveData = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    AllData() {
      return this.reciveData;
    },
  },
};
</script>

<style>
.container {
  margin: 10px;
}
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
th {
  background-color: #4caf50;
  color: white;
  padding: 10px;
}
td {
  padding: 8px;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
button {
  width: 100%;
  margin: 10px 0px 15px;
}
</style>