<template>
  <div class="backdrop" @click.self="closeForm">
    <form>
      <label>First Name:</label>
      <input type="text" 
             required 
             maxlength="15" 
             v-model="Employee.first_name" />

      <label>Last Name:</label>
      <input type="text"
             maxlength="15"  
             required 
             v-model="Employee.last_name" />

      <label>ID_number:</label>
      <input type="text"
             onkeypress='return event.charCode >= 48 && event.charCode <= 57'
             maxlength="8" 
             required
             v-model="Employee.ID_number" />

      <label>Department: </label>
      <select v-model="Employee.Department">
        <option value="NCP">NCP</option>
        <option value="NCC">NCC</option>
        <option value="STM">STM</option>
        <option value="Kids">Kids</option>
      </select>
    
      <button type="button" 
              :disabled="MeetConditions" 
              @click="addToAPI">      
              Submit
      </button>
      <button type="button" @click="closeForm">Cancel</button>
    </form>
  </div>
</template>



<script>
import axios from "axios";
import App from "../App.vue"

export default {
  props: ['limit'],
  name: "addEmployeeData",
  components: { App },
  
  

  data() {
    return {
      Employee: {
        first_name: "",
        last_name: "",
        ID_number: 0,
        Department: "",
      },
    };
  },
  methods: {
    addToAPI() {
      let newUser = {
        first_name: this.Employee.first_name,
        last_name: this.Employee.last_name,
        ID_number: this.Employee.ID_number,
        Department: this.Employee.Department,
      };
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
      this.$emit("closeFormEmitEmployee");
    },
  },
  computed: {
    MeetConditions() {
      if (this.Employee.first_name === "" || 
          this.Employee.last_name === "" || 
          this.Employee.Department === "" ||
          this.limit ||
          this.Employee.ID_number.length <= 6)
        return true 
      
      },
    },
  }
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