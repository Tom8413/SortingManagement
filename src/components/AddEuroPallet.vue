<template>
  <div class="backdrop" @click.self="closeForm">
    <form>
      <label>ID Worker:</label>
      <input type="text" 
             required 
             maxlength="15" 
             v-model="EuroPallet.ID_Worker" />
    
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

export default {
  name: "AddEuroPallet",

  data() {
    return {
      EuroPallet: {
        ID_Worker: "",
    
      },
    };
  },
  methods: {
    addToAPI() {
      let newEuroPallet = {
        ID_Worker: this.EuroPallet.ID_Worker,

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
      if (this.EuroPallet.ID_Worker === "" ) 
          
        return true 
      
      },
    },
};
</script>

<style>
</style>

