<template>
<div class="container">
<table class="table table-striped table-borderes">
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
        </tr>
    </thead>
</table>
</div>  
</template>

<script>
import axios from 'axios';

export default {
    name: 'employeeData',
    
    data() {
        return {
            msg: "Good",
            reciveData: []
        }
    },
    created() {
        axios.get('http://localhost:3000/show-employee')
        .then((response) => {
            this.reciveData = response.data;
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

}
</script>

<style>

</style>