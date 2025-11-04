<template>
  <div class="backdrop" @click.self="closeForm">
    <form>
      <label>First Name:</label>
      <input type="First Name" required v-model="Empolyee.first_name" />

      <label>Last Name:</label>
      <input type="text" required v-model="Empolyee.last_name" />

      <label>ID_number:</label>
      <input type="text" required v-model="Empolyee.ID_number" />

      <label>Department: </label>
      <select v-model="Empolyee.Department">
            <option value="NCP">NCP</option>
            <option value="NCC">NCC</option>
            <option value="STM">STM</option>
            <option value="Kids">Kids</option>
      </select>

      <button type="button" @click="addToAPI">Submit</button>
      <button type="button" @click="closeForm">Cancel</button>
    </form>
  </div>
</template>



<script>
import axios from "axios";

export default {
  name: "addEmployeeData",
  data() {
    return {
      Empolyee: {
        first_name: "",
        last_name: "",
        ID_number: "",
        Department: "",
      },
    };
  },
  methods: {
    addToAPI() {
      let newUser = {
        first_name: this.Empolyee.first_name,
        last_name: this.Empolyee.last_name,
        ID_number: this.Empolyee.ID_number,
        Department: this.Empolyee.Department,
      };
      console.log(newUser);
      axios
        .post("http://localhost:3000/create-employee", newUser)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    closeForm() {
      this.$emit("closeFormEmit");
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
button {
  width: 100%;
  margin: 30px 0px 5px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
</style>