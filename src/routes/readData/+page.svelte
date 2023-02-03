<script>
// @ts-nocheck

    /**
	 * @type {string}
	 */
    let textData
    let textData2
    /**
	 * @type {any}
	 */
    let dayData;
    let dayData2;
    // @ts-ignore
    /**
	 * @type {any[]}
	 */
    let upComingGames = []
    import moment from 'moment'
    import axios from 'axios'
	import { error } from '@sveltejs/kit';
	import { each } from 'svelte/internal';
    let errorMessage = ''
    let succsessMessage = ''
    // @ts-ignore
    /**
	 * @type {{ upComingGames: string | any[]; }}
	 */
    export let data
    //console.log("jee", data.comingGames);
    const send = async () => {
        try {
            console.log(textData.split("\n"))
            const modData = await makeData(textData.split("\n"))
            console.log(modData)

            const responseUpdate = await axios.post("http://0.0.0.0:1337/api/Odds-nhls",  { data: modData[0] })
            console.log(responseUpdate)
            if (responseUpdate.status == 200){
                succsessMessage = "Data send Ok"
                setTimeout(() => {
                    succsessMessage = ''
                }, 2500)
            }

            
        
        } catch {
            errorMessage = "Something is wrong ..."

            setTimeout(() => {
                errorMessage = ''
            }, 2500)
        }
    }
    const sendUpcoming = async  () => {
        try {
            const modData = await makeData2(textData2.split("\n"))
            const responseFromStrapi = await axios.post("http://0.0.0.0:1337/api/up-comin-games-nhls", { data: modData[0] })


        } catch(e){
            console.log(e)
        }
    }
    const dellGames = async (id) => {
        const responseFromStrapi = await axios.delete(`http://0.0.0.0:1337/api/up-comin-games-nhls/${id}`)
        if (responseFromStrapi.status == 200){
            succsessMessage = "Data deleted Ok"
                setTimeout(() => {
                    succsessMessage = ''
                }, 2500)
        }

    }


    async function makeData2(data){
        const array = []
        const date = dayData2
        const timeAndDate = moment(date + ' ' + data[0]);

        array.push({ 
            season: "2022-2023",
            day: timeAndDate.format("DD/MM/YYYY"),
            homeTeam: data[2],
            awayTeam: data[5],
            homeOds: parseFloat(data[7]),
            evenOds: parseFloat(data[9]),
            awayOds: parseFloat(data[11]),
            gameType: "season"
        
        })

        return array

        


    }

    // @ts-ignore
    async function  makeData (/** @type {string[]} */ data) {
        const arrayData = []
        let isEven = false
        const date = dayData
        const time = "18:00";

        const timeAndDate = moment(date + ' ' + data[0]);

        console.log(timeAndDate);
        const unixTime = timeAndDate.unix()


        if (data[7][4] == 'O' || data[7][4] == 'p'){
            isEven = true
        }

        arrayData.push({ 
            season: "2022-2023",
            day: timeAndDate.format("DD/MM/YYYY"),
            millisecond: unixTime * 1000,
            homeTeam: data[2],
            awayTeam: data[5],
            homeScore: Number(data[7][0]),
            awayScore: Number(data[7][2]),
            even: isEven,
            homeOds: parseFloat(data[8]),
            evenOds: parseFloat(data[10]),
            awayOds: parseFloat(data[12]),
            gameType: "season"
        
        })

        //console.log(arrayData);
        return arrayData

    }

 

</script>





<main class="read-data">
    <br>
    <div class="container">
    <div class="col">
        <h2 class="text-center">Update database</h2>
        <p class="text-center">This is new method to update database from oddsportal past games and upcoming games.</p>



        <div class="">
            
            {#if errorMessage.length != 0}
                <div class="alert alert-danger" role="alert">
                    {errorMessage}
                </div>

            {/if}
            
            
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Day</label>
                <input bind:value={dayData} type="text" class="form-control" id="exampleFormControlInput1" placeholder="2023-01-13" />
            </div>
        
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Game Data</label>
                <textarea bind:value={textData} class="form-control"  rows="8"></textarea>
            </div>
            <button on:click={send} class="btin btn-primary">Send</button>
        </div>
    </div>
   
    </div>
    <br>
    <div class="sm col-img"> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 260">
            <path fill="#273086" fill-opacity="0.9" d="M0,224L30,192C60,160,120,96,180,69.3C240,43,300,53,360,69.3C420,85,480,107,540,144C600,181,660,235,720,218.7C780,203,840,117,900,80C960,43,1020,53,1080,85.3C1140,117,1200,171,1260,160C1320,149,1380,75,1410,37.3L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
            <path fill="#f3f4f9" fill-opacity="0.66" d="M0,224L30,192C60,160,120,96,180,69.3C240,43,300,53,360,69.3C420,85,480,107,540,144C600,181,660,235,720,218.7C780,203,840,117,900,80C960,43,1020,53,1080,85.3C1140,117,1200,171,1260,160C1320,149,1380,75,1410,37.3L1440,0L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
        </svg>
    <br>
        <div class="container">
            <h2 class="text-center">Update upcoming games</h2>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Day</label>
                <input bind:value={dayData2} type="text" class="form-control" id="exampleFormControlInput1" placeholder="2023-01-13" />
             </div>
      
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Game Data</label>
                <textarea bind:value={textData2} class="form-control"  rows="8"></textarea>
            </div>
            <button class="btn-secondary" on:click={sendUpcoming}>Update</button>
           
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Day</th>    
                <th scope="col">#</th>
                <th scope="col">1</th>
                <th scope="col">X</th>
                <th scope="col">2</th>
                <th scope="col"></th>
                
                </tr>
            </thead>
            <tbody>
                { #each data.comingGames as {homeTeam, awayTeam, homeOds, awayOds, evenOds, day,id}, i}
                <tr>
                    <th>{day}</th>
                    <th>{homeTeam} / {awayTeam}</th>
                    <th>{homeOds}</th>
                    <th>{evenOds}</th>
                    <th>{awayOds}</th>
                    <th><button class="btn-danger" on:click={() => dellGames(id)} >Delete</button></th>    
                </tr>
                {/each}
            </tbody>
            </table>
           
        
    </div>

</main>


<style> 
      
    
    .read-data {
        background-color: rgb(255, 255, 255);
        color: rgb(12, 12, 12);
        
    }
    th , tr {
        color: rgb(0, 0, 0);
    }
    textarea {
        background-color: rgb(255, 255, 255);
        color: white;
    }
</style>
