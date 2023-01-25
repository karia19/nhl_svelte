<script>
    // @ts-nocheck
    
        import Axios from 'axios';
        import { onMount } from 'svelte';
        import moment from 'moment';
        import '../app.css'
        import Testi from '../components/test.svelte'
	    import Test from '../components/test.svelte';
      
        let nhlGames = []
        onMount(async () => {
            try {
                const data = await Axios.get("http://localhost:3083/api/nhl/powerraitings")
                nhlGames = data.data.data.reverse();
                console.log(moment(nhlGames[0]['playedTime']).format("MM/DD/YYYY"))
                for (let i = 0; i < nhlGames.length; i++){
                    nhlGames[i]['day'] = moment(nhlGames[i]['playedTime']).format("MM/DD/YYYY")
                }
            
                console.log(nhlGames)
            } catch(e){
                console.log(e)
            }
            
        })
    
        const showMore = event => {
            console.log("id what", event.target.name)
            const id = event.target.name
            
            const element = document.getElementById(id)
            show(element)
            
          
        } 
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
    
    <div class="container">
      
     
            <div style="padding-top: 40px;">
                <div>
                  <h2>Season 2022-2023</h2>
               
                </div>
                {#each nhlGames as {home, away, homeScore, awayScore, AADS , HADS, aDefense, aOffensive,
                                    day, homePower, awayPower, awayG, homeG , hDefense, hOffensive, playedTime}, i}
                <div style="width: 100%;">
                
                
                <div class="gamesMain">
                        
                          <div class="gamesTeams" >
                            
                              <div class="teamsAnd">
                                
                                <div class="gamesTeamsVs" style="width: 100%; max-width: 170px; font-weight: 400; font-size: 16px; padding-top: 10px">
                                  <p>{day}</p>
                                </div>
    
                                <div class="gamesTeamsVs" style="width: 100%; max-width: 300px; font-weight: 400; font-size: 16px;">
                                  <ul>
                                    <li><img alt="home nhl" style="height: 20px; width: 23px" src={`./images/${home}.png`} />  {home}</li>
                                    <li><img alt="away nhl" style="height: 23px; width: 23px" src={`./images/${away}.png`} />  {away}</li>
                                  </ul>
                                 
                                 
                                </div>
    
                                <div class="gamesTeamsVs" style="width: 20px; font-size: 16px; font-weight: 400;">
                                  {#if homeScore > awayScore}
                                    <p><strong style="color: blue;">{homeScore}</strong>  {awayScore}</p>
                                  {:else}
                                    <p>{homeScore}  <strong>{awayScore}</strong></p>
                                  {/if}
                                </div>
                                
    
                                <div class="gamesTeamsVs" style="width: 200px; font-weight: 400; font-size: 16px;">
                                  <p> HomePower: {homePower}     AwayPower: {awayPower}</p>
    
                                 
                                  
                                </div>
                                
                                <div class="gamesTeamsVs" style="width: 150px;">
                                 
                                  
                                  <button class="btn btn-outline-success"
                                    type="button" 
                                    name={i}
                                    on:click={showMore}>See Details</button>
                                </div>
    
                                </div>
                              </div>
                                
                            </div> 
                            <div id={i} class="panel">
                                <p style="color: white;" >Details sum from game</p>
                                <div class="panelData">
                                    <table>
                                    <tr>
                                      <th style="width: 30%">Team</th>
                                      <th>Defense</th>
                                      <th>Offensive</th>
                                      <th>Goalie %</th>
                                      <th>ADS</th>
                                      
    
                                    </tr>
                                    <tr>
                                      <td>{home}</td>
                                      <td>{hDefense}</td>
                                      <td>{hOffensive}</td>
                                      <td>{homeG}</td>
                                      <td>{HADS}</td>
                                    </tr>
                                    <tr class="panelData22" >
                                      <td>{away}</td>
                                      <td>{aDefense}</td>
                                      <td>{aOffensive}</td>
                                      <td>{awayG}</td>
                                      <td>{AADS}</td>
                                    </tr>
    
                                    
                                  </table>
                                </div>  
                    </div>   
                </div>    
                {/each}
            </div>
      
    </div>
    