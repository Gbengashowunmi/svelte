<script>
    // import user from "../user"
    import Login from "../lib/Login.svelte"
    import isLoggedIn from "../lib/Login.svelte"

    console.log(isLoggedIn);
</script>

<body>
    <h1>Welcome to Svelte task</h1>
    <Login/>
    
</body>

<style>
    body{
        /* width: 100%; */
        height: 100vh;
        margin: auto;
        background-color: aquamarine;

    }
</style>


<!-- <input type="button" value="Logout" on:click={logout}> -->
