<script>
// @ts-nocheck

  /** @type {import('./$types').PageData} */
  import '../teams.css'
  import IceHockeyRink from '../../../components/iceHockeyRink.svelte';
  import VideoCenter from '../../../components/videoHi.svelte'
  import { flip } from 'svelte/animate'
  import Navbar from '../../../components/navbar.svelte';
  import Footer from '../../../components/footer.svelte'
  
  
  export let data;
  //console.log("shows", data.moreData);

</script>

<main>
    <slot />
</main>


<Navbar />
<main style="background-color: rgb(31, 26, 35)">
    <div class="arrow">
        <a href="/"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>
    </div>
    <div class="vs">
        <h3>VS</h3>
    </div>
    <div class="main-teams">
        
        <div class="home-team">
            <div class="home-im">
                <img alt="home nhl" style="height: 110px; width: 110px" src={`/images/${data.post['home']}.png`} /> 
            </div>
                <h3 class="score">{data.post['homeScore']}</h3>
            <div class="home-details">
                <p>Xgs: {data.post['homeXgs']}</p>
                <p>Shots: {data.moreData['homeShots']}</p>
                <p>Power Play: {data.moreData['homePowerPlay']}% </p>
                <p>Penalty Kill: {data.moreData['homePenaltyKill']}% </p>

                <p>Missed score change. Change is over 20%</p>
                <p>{data.post['homeMissedHighChanges']}</p>
                

                
            </div>

            <div class="home-goalie">
                
                <h4>Goalie: {data.moreData['homeGoaliName']}</h4>

                <!-- <h5>Time on Ice: {data.moreData['homeGoalie']['timeOnIce']}</h5> -->
                {#if data.moreData['homeGoalie']['savePercentage'] == undefined}
                    <h5>Save: no data ...</h5>
                    <h5>Even Save: no data ....</h5>
                {:else}
                    <h5>Save: {data.moreData['homeGoalie']['savePercentage'].toFixed(2)} %</h5>
                    <h5>Even Save: {data.moreData['homeGoalie']['evenStrengthSavePercentage'].toFixed(2)} %</h5>
                {/if}

                {#if  data.moreData['homeGoalie']['powerPlaySavePercentage'] != undefined}
                    <h5>Powerplay: {data.moreData['homeGoalie']['powerPlaySavePercentage'].toFixed(2)} %</h5>
                {:else}
                    <h5>Powerplay: 0.00</h5>
                {/if}
            
            </div>
        </div>
        
        <div class="away-team">
            <div class="away-im">
                <img alt="home nhl" style="height: 110px; width: 110px" src={`/images/${data.post['away']}.png`} /> 
            </div>
                <h3 class="score">{data.post['awayScore']}</h3>
            <div class="away-details">
                <p>Xgs: {data.post['awayXgs']}</p>
                <p>Shots: {data.moreData['awayShots']}</p>
                <p>Power Play: {data.moreData['awayPowerPlay']}% </p>
                <p>Penalty Kill: {data.moreData['awayPenaltyKill']}% </p>

                <p>Missed score change. Change is over 20%</p>

                <p>{data.post['awayMissedHighChanges']}</p>
            
            </div>
            <div class="away-goalie">
                
                <h4>Goalie: {data.moreData['awayGoaliName']}</h4>
                
                
                <!-- <h5>Time on Ice: {data.moreData['awayGoalie']['timeOnIce']}</h5> -->
                {#if data.moreData['awayGoalie']['savePercentage'] == undefined}
                    <h5>Save: no data ....</h5>
                    <h5>Even Save: no data ....</h5>
                {:else}
                    <h5>Save: {data.moreData['awayGoalie']['savePercentage'].toFixed(2)} %</h5>
                    <h5>Even Save: {data.moreData['awayGoalie']['evenStrengthSavePercentage'].toFixed(2)} %</h5>
                {/if}

                {#if data.moreData['awayGoalie']['powerPlaySavePercentage'] != undefined }
                    <h5>Powerplay: {data.moreData['awayGoalie']['powerPlaySavePercentage'].toFixed(2)} %</h5>
                {:else}
                    <h5>Powerplay: 0.00</h5>
                {/if}
                


            </div>

        </div>
        
    </div>
    
    <VideoCenter
        videoData={data}
    />
    <br>
    <br>
    <IceHockeyRink
        details={data.post}
    />
    <br>
    <Footer />
   
</main>