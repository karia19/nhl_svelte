<script>
// @ts-nocheck

  import { onMount } from "svelte";
  import GoogleSingIn from "../../components/googleSingIn.svelte"
  import Logout from "../../components/Logout.svelte";
  import axios from "axios";
  //import auth from "../../auth_service"
  import { user } from "../../store";

  let email;
  let password;
  let errMessage = ''
  let auth0Client;

  
  onMount(async () => {
    auth0Client = await auth.createClient();
    isAuthenticated.set(await auth0Client.isAuthenticated());
    user.set(await auth0Client.getUser());
  })

  function login() {
    auth.loginWithPopup(auth0Client);
  }

  function logout() {
    auth.logout(auth0Client);
  }
  

  const makeSend = async () => {
    console.log(email, password)
    const data = {
        identifier: email,
        password: password
    }
    try {
      const resFromApi = await axios.post("http://localhost:1337/api/auth/local", data)
      if (resFromApi.status == 200){

      }
      console.log(resFromApi)
    } catch(e){
      errMessage = "error to login check password or username ...."

      
      setTimeout(() => {
        errMessage = ''
      }, 2500)
      
    }

  }
 


</script>




<main class="log-pag">
  <div class="main">
    <div class="reg-i">
   
    <form class="col container">
        <div class="mb-1">
          <label for="exampleInputEmail1" class="form-label">Username</label>
          <input bind:value={email} type="texy" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" style="color: white" class="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div class="mb-1">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input bind:value={password} type="password" class="form-control" id="exampleInputPassword1">
        </div>

      
        <div class="mb-2 form-check">
          {#if errMessage.length != 0}
                <div class="alert alert-danger" role="alert">
                    {errMessage}
                </div>

          {/if} 
        </div>
        
        <button on:click={makeSend} type="button" class="btn btn-primary">Submit</button>
        <div class="button-center">
          <GoogleSingIn />        
        </div>
        <br>
        <div class="button-center">
          <button on:click={login} class="btn btn-primary">Login</button>
        </div>     
     
      </form>
      <div>
 
    </div>
  
  </div>
   
</main>


<style>
    .main {
      background-image: url('./haikei1.png');
        background-repeat: no-repeat;
        height: 100vh;
        width: 100%;
        background-position: center;

        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #001220;
        flex-direction: column;
    }
    .form-label {
        color: white;
    }
    .reg-i  {
      width: 60%;
    
    }
    .button-center {
      display: flex;
      justify-content: left;
    }
    .form-check {
      padding-left: 0px;
    }

    @media (max-width: 800px) {
      .reg-i {
        width: 100%;
      }
    }
  
</style>