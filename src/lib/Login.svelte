<script>
    import userStore from "../user"
	import Dashboard from "./Dashboard.svelte";
    let typedUsername = ""
    let password = ""
    let error = ""
    let matchingUser;
    export let logout;
export let isLoggedIn = false


    const login = ()=>{

        const trimmedUsername = typedUsername.trim()
        const trimmedPassword = password.trim()
             matchingUser=$userStore.find(user => user.username === trimmedUsername)
             if(typedUsername ==="" && trimmedPassword ===  ""){
                error = "Enter details"
                setTimeout(() => {
                    error =""
                }, 3000);
             }

             else if(!matchingUser){
                error="unknown user"
                   setTimeout(() => {
                    error =""
                }, 3000);
             }

             else if (matchingUser.password !== trimmedPassword || trimmedPassword ===""){
                error ="Invalid password"
                   setTimeout(() => {
                    error =""
                }, 3000);
             }
             else if(matchingUser && matchingUser.password === trimmedPassword){
                 isLoggedIn = true
                 password=""
                 typedUsername=""
            }
 

    }

     logout = ()=>{
        isLoggedIn= false;
    }
</script>
{#if !isLoggedIn}
<h2>Kindly Log in to open your dashboard</h2>

<form on:submit|preventDefault={login} class="form">
<p class="error">{error}</p>

<div class="input">
    <label for="username">Username</label>
    <input type="text" id="username" bind:value={typedUsername}>
</div>
<div class="input">
    <label for="password">Password</label>
    <input type="password" id="password" bind:value={password}>
</div>
<button type="submit">Login</button>
</form>

<div class="login-details">
    <h2>Login credentials</h2>
    <h4>Username - password</h4>
    <ul>
    {#each $userStore as user}
<h5>{user.username} - {user.password}</h5>
    {/each}
    </ul>

</div>

{:else}  
<Dashboard username={matchingUser.username} logout={logout} quote={matchingUser.qoute}/>
{/if}

<style>
.form{
    border: 1px solid hotpink;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: 70%;
    margin: auto;
    border-radius: 10px;
    box-shadow: 2px 4px 5px grey;
}

.error{
    color: tomato;
}
.form .input{
    /* border: 2px solid red; */
    margin: 0;
}

</style>

