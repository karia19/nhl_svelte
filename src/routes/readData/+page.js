/** @type {import('./$types').PageLoad} */
import axios from 'axios';

export async function load() {

    const dataGames = await (await axios.get("http://0.0.0.0:1337/api/v1/nhl/season/upCominGames")).data
  
    return {
        comingGames: dataGames.data
    };
}



