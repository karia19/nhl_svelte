/*
If your load function should always run on the server (because it uses private environment variables, 
for example, or accesses a database) then you can put it in a +page.server.js instead.

https://kit.svelte.dev/docs/load

*/


import axios from 'axios';
 

/** @type {import('./$types').PageServerLoad} */

export async function load({ params, parent }) {
  
  await parent()
  console.log("hello fetch data to fron tend...")
  
  const resBackend = await axios.get(`http://0.0.0.0:1337/api/v1/nhl/xgs/${params.slug}`)  
  const gameDetails = await axios.get(`http://0.0.0.0:1337/api/v1/nhl/season/onestats/${params.slug}`)
  const videosForGames = await axios.get(`http://statsapi.web.nhl.com/api/v1/game/${params.slug}/content`)
  //console.log(videosForGames.data['highlights']['scoreboard']);  
  
  return{
    post:  resBackend.data, //"hello" //await db.getPost(params.slug)
    moreData: gameDetails.data,
    videos: videosForGames.data['highlights']['scoreboard']
  };
  
}
