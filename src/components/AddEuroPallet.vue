<template>
  <div class="backdrop" @click.self="closeForm">
    <form>
      <label>ID Worker:</label>
      <input type="text" 
             required 
             maxlength="15" 
             v-model="EuroPallet.ID_Worker" />

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
export default {
  name: "AddEuroPallet",

  data() {
    return {
      EuroPallet: {
        ID_Worker: "",
        keyPallet: 0,
        quantity: 0,
        nestet: "",
        department: "",
        location: "",
        codeForTickets: 0,
        codeForSelectors: 0,
      },
    };
  },
  methods: {
    addToAPI() {
      let newEuroPallet = {
        ID_Worker: this.ID_Worker,
        keyPallet: this.keyPallet,
        quantity: this.quantity,
        nestet: this.nestet,
        department: this.department,
        location: this.location,
        codeForTickets: this.codeForTickets,
        codeForSelektors: this.codeForSelectors,
      };
      axios
        .post("http://localhost:3000/create-EuroPallet", newEuroPallet)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    closeForm() {
      this.$emit("closeFormEmitPallet");
    },
  },
};
</script>

<style>
</style>

