<template>
<div class="block"> click me
</div>
 <div class="container">

<form>
    <div class="well">
        <h4>Add User</h4>
        <div class="form-group">
            <label class="pull-left">First Name</label>
            <input type="text" class="form-control" placeholder="First Name">
        </div>
        <div class="form-grup">
            <label class="pull-left">Last Name</label>
             <input type="text" class="form-control" placeholder="Last Name">
        </div>
        <div class="form-grup">
            <label class="pull-left">Email</label>
             <input type="text" class="form-control" placeholder="Email">
        </div>

        <button type="submit" class="btn btn-large btn-black btn-primary full-width">Submit</button>

    </div>
    </form>
  </div> 
</template>

<script>
export default {
props: ['delay']
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