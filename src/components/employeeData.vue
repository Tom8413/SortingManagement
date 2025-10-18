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

    <tr v-for="data in reciveData" :key="data">
        <td>{{data.first_name}}</td>
        <td>{{data.last_name}}</td>
        <td>{{data.email}}</td>
        <td><button @click="deleteData(data, data._id)">Delete</button></td>
      

    </tr>
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
    methods: {
    deleteData(reciveData, _id) {
        axios.delete('http://localhost:3000/delete-employee/' + _id)
        .then(response => {
          return console.log(response)
        })
        .catch(error => console.log(error)); 
        

        //window.location.reload();

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

</style>