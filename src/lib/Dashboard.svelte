
<script>
    export let username
    export let logout
</script>

<div class="dashboard">
    <h3>Welcome {username}. Your Dashboard is here</h3>
    <button  on:click={logout}>Logout</button>
</div>

<style>
    .dashboard{
        width: 100%;
        height: 100%;
        margin: auto;
        background-color: aquamarine;
    }
</style>