<script>
    import userStore from "../user"
	import Dashboard from "./Dashboard.svelte";
    let typedUsername = ""
    let password = ""
    let error = ""
    let matchingUser;
export let isLoggedIn = false
    const login = ()=>{
        // matchingUser = $userStore.find(user => user.username === typedUsername);
             matchingUser=$userStore.find(user => user.username === typedUsername)
if(typedUsername || password === ""){
    error = "Fill in all fields"
   setTimeout(() => {
       error = ""
   }, 2000); 
}

else if (matchingUser && matchingUser.password !== password){
    error = "Incorrect password"

}
            if(matchingUser && matchingUser.password === password){
                 console.log(`welcome ${matchingUser.username}`);
                 isLoggedIn = true
                 console.log(isLoggedIn);
            }
            else{
                 console.log("unscessful");
            }

    }

    const logout = ()=>{
        console.log("logged out");
    }
</script>
{#if !isLoggedIn}
<h2>Kindly Log in to open your dashboard</h2>

<form on:submit|preventDefault={login}>
<p>{error}</p>

<div>
    <label for="username">Username</label>
    <input type="text" id="username" bind:value={typedUsername}>
</div>
<div>
    <label for="password">Password</label>
    <input type="password" id="password" bind:value={password}>
</div>
<button type="submit">Submit</button>
</form>

{:else}  
<Dashboard username={matchingUser.username}/>
{/if}



