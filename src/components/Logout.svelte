<script>
// @ts-nocheck

    window.signOut = () => {
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(() => {
        // User is now signed out
      });
    }
  </script>
  
 <!-- svelte-ignore missing-declaration -->
 <!-- svelte-ignore a11y-click-events-have-key-events -->
 <!-- svelte-ignore a11y-missing-attribute -->
 <a on:click={singOut} >Sign out</a>