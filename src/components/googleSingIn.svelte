<svelte:head>
  <script src="https://apis.google.com/js/platform.js" async defer></script>
</svelte:head>


<script>
// @ts-nocheck
    import { onMount } from "svelte";
    
    onMount(async ()  => {
        window.onSignIn =  (googleUser)  => {
            const profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
        }
    });

  </script>


<div class="g-signin2 google-button" data-longtitle="true" data-onsuccess="onSignIn" data-theme="dark" />

<style>
.google-button {
    margin-top: 20px;
}
</style>
  