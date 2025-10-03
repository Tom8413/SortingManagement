<template>
<div class="block"> click me
</div>
 <div class="container">

<form>
    <div class="well">
        <h4>Add User</h4>
        <div class="form-group">
            <label class="pull-left">First Name</label>
            <input type="text" class="form-control" placeholder="First Name" v-bind="Empolyee.first_name">
        </div>
        <div class="form-grup">
            <label class="pull-left">Last Name</label>
             <input type="text" class="form-control" placeholder="Last Name" >
        </div>
        <div class="form-grup">
            <label class="pull-left">Email</label>
             <input type="text" class="form-control" placeholder="Email" >
        </div>

        <button type="submit" class="btn btn-large btn-black btn-primary full-width" @click="addToAPI">Submit</button>

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
            Empolyee: { first_name: ''}
           
        }
    },
    methods: {
    addToAPI() {
        let newUser = {
            first_name: this.Empolyee.first_name
        }
        console.log(newUser);
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