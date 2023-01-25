<script>
    /**
	 * @type {string}
	 */
    let textData
    /**
	 * @type {any}
	 */
    let dayData;
    let upComingGames = []
    import moment from 'moment'
    import axios from 'axios'


    const send = async () => {
        console.log(textData.split("\n"))
        const modData = await makeData(textData.split("\n"))
        console.log(modData)

        const responseUpdate = await axios.post("http://0.0.0.0:1337/api/Odds-nhls",  { data: modData[0] })
        console.log(responseUpdate)


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

    const games = async () => {
        const dataGames = await axios.get("http://0.0.0.0:1337/api/v1/nhl/season/upCominGames")
        upComingGames.push(dataGames.data);
        // @ts-ignore
        console.log(upComingGames);
    }

</script>





<main>
    <br>
    <h2 class="text-center">Update database</h2>
    <p class="text-center">This is new method to update database from oddsportal past games and upcoming games.</p>

    <div class="container">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Day</label>
            <input bind:value={dayData} type="text" class="form-control" id="exampleFormControlInput1" placeholder="2023-01-13" />
        </div>
      
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Game Data</label>
            <textarea bind:value={textData} class="form-control"  rows="8"></textarea>
        </div>
        <button on:click={send} class="btin btn-primary">Send</button>

        <div>
            <h3 class="text-center">Show upcoming games</h3>
            <button class="btn-secondary" on:click={games}>Show games</button>
        </div>
    </div>

</main>