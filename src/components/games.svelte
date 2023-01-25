<script>
// @ts-nocheck
  import { getContext } from 'svelte'
  //const thisObject = getContext('thisKey')
  import { flip } from 'svelte/animate';
  //console.log("getcontex", thisObject)

  export let gamee;
  console.log(gamee);

  const showMore = event => {
      console.log("id what", event.target.name)
      const id = event.target.name
            
      const element = document.getElementById(id)
      show(element)
            
          
  }
  const moreDetails = event => {
      console.log("id what", event.target.name)
      const address = event.target.name
      window.location.href = `http://localhost:5173/games/${address}`
            
    
            
          
  }

  // @ts-ignore
  function show(element){
      console.log("ed", element)
      if (element.style.display == "")
            element.style.display = "block"
      else if (element.style.display == "none"){
              element.style.display = "block"
      }
      else {
          element.style.display = "none"
      }
  }
</script>



<div style="padding-top: 40px;">
  <div class="text-left">
    <p class="display-6" style="margin-top: 30px; margin-bottom: 40px; color: #19ffa3;">
        Season 2022-2023. Shows 50's last games from nhl. Use search for more games to ceraint team.
        More details shows data from games including xgs and videos of goals.</p>
  </div>
  {#each gamee as {homeTeam, awayTeam, homeScore, awayScore, day, homeShots, awayShots
          , homeOds, awayOds, evenOds, homePowerplay, awayPowerPlay, id}, i}
  <div  style="width: 100%;">
  
  
  <div  class="gamesMain">
          
            <div class="gamesTeams" >
              
                <div class="teamsAnd">
                  
                  <div class="gamesTeamsVs" style="width: 100%; max-width: 90px; font-weight: 400; font-size: 16px; padding-top: 10px">
                    <p> {day}</p>
                  </div>

                  <div class="gamesTeamsVs" style="width: 100%; max-width: 300px; font-weight: 400; font-size: 16px;">
                    <ul>
                      <li><img alt="home nhl" style="height: 24px; width: 24px; padding: 2px " src={`./images/${homeTeam}.png`} />  {homeTeam}</li>
                      <li><img alt="away nhl" style="height: 24px; width: 24px; padding: 2px" src={`./images/${awayTeam}.png`} />  {awayTeam}</li>
                    </ul>
                   
                   
                  </div>

                  <div class="gamesTeamsVs" style="width: 20px; font-size: 16px; font-weight: 400;">
                    {#if homeScore > awayScore}
                      <p><strong style="color: #bb12ea;">{homeScore}</strong>  {awayScore}</p>
                    {:else}
                      <p>{homeScore}  <strong style="color: #12ea8d" >{awayScore}</strong></p>
                    {/if}
                  </div>
                  

                
                  
                 
                  <div class="gamesTeamsVs" style="width: 150px;">        
                    <button class="btn btn-outline-success"
                      type="button" 
                      name={id}
                      on:click={moreDetails}>More Details</button>
                  </div>

                  </div>
                </div>
                  
              </div> 
             
        
  </div>    
  {/each}
</div>