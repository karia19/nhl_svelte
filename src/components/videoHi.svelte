<script>
// @ts-nocheck

    import './videoH.css'
    export let videoData
    //console.log(videoData.videos);
    const videos = videoData.videos['items']
    const homeXgs = videoData.post['homeGoals']
    const awayXgs = videoData.post['awayGoals']

    const sameArray = []
    const collectData = []
    //console.log(videoData)
    
    for (let i = 0; i < awayXgs.length; i++){
        //const findData = videoData.videos['items'].filter(x => x['description'].includes(awayXgs[i]['shooterName']))
        sameArray.push(awayXgs[i])
        
        /*
        findData[0].xgs = awayXgs[i]['xgs']
        findData[0].distance = awayXgs[i]['distance']
        findData[0].angle = awayXgs[i]['angle']
        collectData.push(findData[0])
        */
    }
    for (let i = 0; i < homeXgs.length; i++){
        //const findData = videoData.videos['items'].filter(x => x['description'].includes(homeXgs[i]['shooterName']))
        sameArray.push(homeXgs[i])
        /*
        findData[0].xgs = homeXgs[i]['xgs']
        findData[0].distance = homeXgs[i]['distance']
        findData[0].angle = homeXgs[i]['angle']
        collectData.push(findData[0])
        */
    }

    const sorted = sameArray.sort((x, y) => x['period'] - y['period'])
    
    for (let i = 0; i < sorted.length; i++){
        collectData.push({ xgs: sorted[i]['xgs'], distance: sorted[i]['distance'], angle: sorted[i]['angle'], 
                        playbacks: videoData.videos['items'][i]['playbacks'],
                        title: videoData.videos['items'][i]['title'],
                        description: videoData.videos['items'][i]['description'],
                        })
    }
    //console.log(collectData)

</script>

<main>
    <div class="container">
        <p class="display-6 text-left" style="margin-top: 50px; margin-bottom: 40px; color: white; max-width: 800px">
            Game goals And video of goals. There is all so calculated expected goals value in precentage. Distance show distance from goals.</p>

        <div class="row row-cols-1 row-cols-3">
            {#each collectData as { title ,  description, xgs, distance, angle, playbacks}}
                <div class="col">
                <div class="card">
                    <div class="card-video">
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <iframe  class="" src={playbacks[3]['url']}></iframe>

                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                        <p class="btn btn-outline-light">Xgs: {xgs.toFixed(3)}</p>
                        <p class="btn btn-outline-light">Distance: {distance.toFixed(3)}</p>

                    </div>
                </div>
                </div>


    {/each}
        </div>
    </div>
    
</main>

<style>
    iframe {
        height: 100%;
        width: 100%;
    }
    

</style>