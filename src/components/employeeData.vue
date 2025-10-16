<template>
<div class="container">
    <div class="col-lg-3">
        <div class="panel panel-primary">
            <div class="panel-heading">MUB
                <span class="badge pull-right">1</span>
            </div>
            <div class="panel-body">
                <kbd>2</kbd> People
                <kbd>1</kbd> Kids
                <br>
                <br>
                <kbd>Suit</kbd>
                <button type="button" class="btn btn-dagner pull-right">Delete</button>
            </div>
            <div class="panel-footer">
                <h4>
                    Cosadasjdjasd
                </h4>
            </div>
        </div>
    </div>
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