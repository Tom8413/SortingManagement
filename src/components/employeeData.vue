<template>

<div class="horizontal">
<div class="block" v-for="data in reciveData" :key="data">
    <div>First name : {{data.first_name}}</div>
    <div>Last name : {{data.last_name}}</div>
    <div>ID number : {{data.ID_number}}</div>
    <div>Department : {{data.Department}}</div>
</div>
</div>
<div class="container">
<table class="table table-striped table-borderes">
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>ID_number</th>
            <th>Department</th>
        </tr>
    </thead>

    <tr v-for="data in reciveData" :key="data">
        <td>{{data.first_name}}</td>
        <td>{{data.last_name}}</td>
        <td>{{data.ID_number}}</td>
        <td>{{data.Department}}</td>
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
.block {
    width: 200px;
    border-radius: 10px;
    background: green;
    color: white;
    text-align: center;
    padding: 50px 0;
    margin:  30px 10px auto;
}
.horizontal {
    display: flex;
}
</style>