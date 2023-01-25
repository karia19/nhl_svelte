<svelte:head>
  <script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"></script>
</svelte:head>

<script>
// @ts-nocheck

    import { onMount } from "svelte"; 
    import './rink.css'

    export let details
    //console.log(details)

    const home = details['homeDetails']
    const away = details['awayDetails']
    // @ts-ignore
    //console.log(home.map(x => x['eventCordX']));
    var trace1 = {
        x: home.map(x => x['eventCordX']),
        y: home.map(x => x['eventCordY']),
        mode: 'markers',
        type: 'scatter',
        name: "home",
        text:  home.map(x => x['xgs'].toFixed(3)),
        marker: { size: 14 , color: "green"},
        
        };

    var trace2 = {
        x: away.map(x => x['eventCordX']),
        y: away.map(x => x['eventCordY']),
        mode: 'markers',
        type: 'scatter',
        name: "away",
        text:  away.map(x => x['xgs'].toFixed(3)),
        marker: { size: 14 }
        };

        var data = [ trace1, trace2 ];

        var layout = {
            xaxis: {
                range: [ -110, 110 ],
                showgrid: false,
                showline: false,
                zeroline: false,
                showticklabels: false

            },
            yaxis: {
                range: [-90, 90],
                showgrid: false,
                showline: false,
                zeroline: false,
                showticklabels: false

            },
            
            images: [{
                "source": ("http://localhost:5173/images/Hockey-Rink.png"),
                "layer": "below",
                "xref": 1,
                "yref": 0,
                "x":  0.5,
                "y": 1,
                "sizex": 1,
                "sizey": 1.1,
                "xanchor": "center",
                
                "opacity": 1
                
            }],
            responsive: true,
            title:'',
            grid: {
                columns: 0
            }
        };

        onMount(() => {
            let plotlyDiv = document.getElementById('nhl-data')
            // @ts-ignore
            let Plot = new Plotly.newPlot(plotlyDiv, data,  layout); 

        })



</script>

<main>
    <div class="rink" >

    
    <div class="container" style="positon: flex; justify-content: left;">
        <p class="display-6" style="margin-top: 50px; margin-bottom: 40px; color: #19ffa3;">
            Missed goal change where expected goal value is over 20%. When Xgs is over 20% this is usually
            very good goal opportune.</p>
    </div>
    <div class="cordinates" >
      <div id="nhl-data" class="nhl-scatterimage"></div>
    </div>
    
    
   
    </div>

  

</main>

<style>
    @media (max-width: 800px) {
        .rink {
            display: none;
        }    
    }
   
</style>