<template>
  <div class="backdrop" @click.self="closeForm">
    <form>
      <label>ID Worker:</label>
      <input type="text" 
             required 
             maxlength="15" 
             v-model="EuroPallet.ID_Worker" />

      <label>Key Pallet:</label>
      <input type="text" 
             required 
             maxlength="15" 
             v-model="EuroPallet.keyPallet" />

      <label>Quantity:</label>
      <input type="text" 
             required 
             maxlength="4" 
             v-model="EuroPallet.Quantity" />

      <label>Nestet: </label>
      <select v-model="EuroPallet.Nestet">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      
      <label>Department: </label>
      <select v-model="EuroPallet.Department">
        <option value="NCP">NCP</option>
        <option value="NCC">NCC</option>
        <option value="STM">STM</option>
        <option value="Kids">Kids</option>
      </select>
    
          <label>location: </label>
      <select v-model="EuroPallet.Location">
        <option value="Raki">Kaki</option>
        <option value="Rolls">Rolls</option>
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
import HomePage from "./HomePage.vue"

export default {
  props: ['limitEuroPallet'],
  name: "AddEuroPallet",
  components: {HomePage},

  data() {
    return {
      EuroPallet: {
        ID_Worker: "",
        KeyPallet: 0,
        Quantity: 0,
        Nestet: "",
        Department: "",
        Location: "",    
      },
    };
  },
  methods: {
    addToAPI() {
      let newEuroPallet = {
        ID_Worker: this.EuroPallet.ID_Worker,
        KeyPallet: this.EuroPallet.KeyPallet,
        Quantity: this.EuroPallet.Quantity,
        Nestet: this.EuroPallet.Nestet,
        Department: this.EuroPallet.Department,
        Location: this.EuroPallet.Location,

      };
      axios
        .post("http://localhost:3000/createEuroPallet", newEuroPallet)
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
  computed: {
    MeetConditions() {
      if (this.EuroPallet.ID_Worker === "" ||
          this.EuroPallet.ID_Worker == 0 ||
          this.EuroPallet.Quantity ==="" ||
          this.EuroPallet.Quantity == 0 ||
          this.limitEuroPallet )

        return true 
      
      },
    },
};
</script>

<style>
form {
  max-width: 530px;
  margin: 60px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 40px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 10px 0 5px;
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

