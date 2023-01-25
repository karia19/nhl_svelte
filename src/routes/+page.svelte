

<script>
        import { onMount } from 'svelte';
        import '../app.css';
        import axios from 'axios';
        import Games from '../components/games.svelte';
	    import Navbar from '../components/navbar.svelte';
        import Footer from '../components/footer.svelte'
        //import { setContext } from 'svelte'
        let name = ''
        let useSearch = false

      
        const searchFrom = async () => {
            console.log("haloo", name)
            const season = "2022-2023"
            // @ts-ignore
            const filteredData =  await axios.get(`http://0.0.0.0:1337/api/v1/nhl/season/concatstats/${season}/${name}`)  //nhlGames.filter(x => x['homeTeam'] == name)
            const searchData = filteredData
            console.log(searchData);
            // @ts-ignore
            if (searchData.data.length == 0){
                useSearch = true
            } else {
                // @ts-ignore
                useSearch = false
                nhlGames = searchData.data
            }
        }
        /**
	 *  @type {string | any[]}
	 */
    
        let nhlGames = []
        onMount(async () => {
            try {
                const response = await fetch("http://0.0.0.0:1337/api/v1/nhl/season/stats/50/2022-2023")
              
                const data = await response.json();
                console.log(data);
                nhlGames = data;
                //setContext('thisKey', nhlGames)

                /*
                for (let i = 0; i < nhlGames.length; i++){
                    nhlGames[i]['day'] = moment(nhlGames[i]['playedTime']).format("MM/DD/YYYY")
                }
                */


                
                
                //console.log(nhlGames)
            } catch(e){
                console.log(e)
            }
            
        })
    

</script>

<Navbar />
<div class="main-page">
<div class="container">
    <br>
    <div class="input-group mb-3">
        <button on:click={searchFrom} class="btn btn-outline-primary" type="button" id="button-addon1">Search</button>
        <input type="text"  bind:value={name} class="form-control" placeholder="Boston Bruins" aria-label="Example text with button addon" aria-describedby="button-addon1">
    </div>
    {#if  useSearch}
        <h3>No games found check ....</h3>    

    {:else}
        <Games  gamee={nhlGames}/>
    {/if}
    <br>
    <br>
</div>
</div>
<Footer />

