<template>
<div class="backdrop">
<form>
    <label> ID Worker</label>
    <input v-model="EuroPallet.ID_Worker" />
</form>

</div>
</template>

<script>

export default {
    name: "AddEuroPallet",

    data() {
        return{
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
        .then((response) =>{
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
        },
    }
}
</script>

<style>
</style>

