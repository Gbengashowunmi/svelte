
<script>
    export let username
    export let logout
    export let quote
</script>

<div class="dashboard">
    <h3>Welcome {username}. Your Dashboard is here</h3>
    <h5>Here is your favourite qoute</h5>
    <p>Qoute:{quote}</p>
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