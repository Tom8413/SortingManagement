<template>
 <div class="container">

<form>
    <div class="well">
        <h4>Add User</h4>
        <div class="form-group">
            <label class="pull-left">First Name</label>
            <input type="text" class="form-control" placeholder="First Name" v-model="Empolyee.first_name">
        </div>
        <div class="form-grup">
            <label class="pull-left">Last Name</label>
             <input type="text" class="form-control" placeholder="Last Name" v-model="Empolyee.last_name">
        </div>
        <div class="form-grup">
            <label class="pull-left">ID_number</label>
             <input type="text" class="form-control" placeholder="ID_number" v-model="Empolyee.ID_number">
        </div>
            <div class="form-grup">
            <label class="pull-left">Department</label>
             <input type="text" class="form-control" placeholder="Department" v-model="Empolyee.Department">
        </div>

        <button type="button" class="btn btn-large btn-black btn-primary full-width" @click="addToAPI">Submit</button>

    </div>
    </form>
  </div> 
</template>



<script>
import axios from 'axios';


export default {
    name: 'addEmployeeData',
    data() {
        return {
            Empolyee: { first_name: '', last_name: '', ID_number: '', Department: ''},
           
        }
    },
    methods: {
    addToAPI() {
        let newUser = {
            first_name: this.Empolyee.first_name,
            last_name: this.Empolyee.last_name,
            ID_number: this.Empolyee.ID_number,
            Department: this.Empolyee.Department
        }
        console.log(newUser);
        axios.post('http://localhost:3000/create-employee', newUser)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

}
</script>

<style>
.block {
    width: 400px;
    border-radius: 20px;
    background: #0faf87;
    padding: 100px 0;
    margin:  40px auto;

}

</style>