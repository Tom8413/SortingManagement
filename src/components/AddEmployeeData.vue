<template>
<div class="block"> click me
</div>
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
            <label class="pull-left">Email</label>
             <input type="text" class="form-control" placeholder="Email" v-model="Empolyee.email">
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
            Empolyee: { first_name: '', last_name: '', email: ''},
           
        }
    },
    methods: {
    addToAPI() {
        let newUser = {
            first_name: this.Empolyee.first_name,
            last_name: this.Empolyee.last_name,
            email: this.Empolyee.email
        }
        console.log(newUser);
        axios.post('http://localhost:3000/add-employee', newUser)
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