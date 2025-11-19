<template>
  <div class="horizontal">
    <div class="block" v-for="(data, index) in AllData" :key="index">
      <div>ID Worker : {{ data.ID_Worker }}</div>
      <div>keyPallet : {{ data.keyPallet }}</div>
      <div>Quantity : {{ data.Quantity }}</div>
      <div>Nestet : {{ data.Nestet }}</div>
      <div>Department : {{ data.Department }}</div>
      <div>Location : {{ data.Location }}</div>
      <button @click="deleteData(data, data._id)">Delete</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { registerRuntimeCompiler } from "vue";

export default {
  name: "euroPallet",

  data() {
    return {
      reciveData: [],
      limit: 8,
    };
  },
  methods: {
    deleteData(reciveData, _id) {
      axios
        .delete("http://localhost:3000/delete-EuroPallet/" + _id)
        .then((response) => {
          //return console.log(response);
        })
        .catch((error) => console.log(error));

      //window.location.reload();
    },
  },
  created() {
    axios
      .get("http://localhost:3000/show-EuroPallet")
      .then((response) => {
        this.reciveData = response.data;
        //console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
    computed: {
    AllData() {
      return this.reciveData.slice(0, this.limit);
    },
    },
    updated() {
      if (this.reciveData.length === 8) {
        this.$emit("EmitDataLimit", true)
      }
  },

  };
</script>

<style>
.delete {
  position: absolute;
  top: 0.1;
  right: 0;
  border-radius: 50%;
  padding: 8px;
}
.delete:hover {
  cursor: pointer;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 2);
}
.block {
  width: 200px;
  border-radius: 10px;
  background: rgb(190, 143, 71);
  color: white;
  text-align: center;
  padding: 50px 0;
  margin: 30px 10px auto;
}
.horizontal {
  display: flex;
}
</style>