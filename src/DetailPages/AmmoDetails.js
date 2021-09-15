import React, { useState, useEffect } from "react";

function AmmoDetails ({ match }) {
    //initialize round data state
    let [roundData, setRoundData] = useState([[], [0, 'Loading']])
    //initialize the second set of data for the round
    let [roundDataTT, setRoundDataTT] = useState([])

    //fetch data from public github repository
    //idea to utilize raw link from https://stackoverflow.com/questions/63131453/how-to-fetch-data-from-a-particular-github-txt-file-in-html-page-via-javascript
    //it is called ammo data becuase the response has data on all ammo, not just desired round
    function fetchAmmoData() {
    fetch('https://raw.githubusercontent.com/TarkovTracker/tarkovdata/master/ammunition.json')
        .then (response => response.json())
        // use object.entries to convert object to array. use match params to identify desired round
        .then(responseJSON => setRoundData(Object.entries(responseJSON[match.params.specificRound])))
    }

    //create function to fetch additional round data from tarkov-tools api, and also set that data to state
    function fetchRoundDataTT () {
                
        //copy paste fetch request from Browser JS example in documentation at tarkov-tools.com/api/ and change some parts to fit the query i want
        fetch('https://tarkov-tools.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({query: `{
                item(id: "${match.params.specificRound}") {
                    wikiLink
                    imageLink
                    gridImageLink
                    avg24hPrice
                    low24hPrice
                    high24hPrice
                }
            }`})
        })
            .then(response => response.json())
            .then(responseJSON => setRoundDataTT(responseJSON.data.item));
    }

    //utilize useEffect to fetch data on component mount
    useEffect(() => { fetchAmmoData() }, [])
    //same thing but fetching from api
    useEffect(() => { fetchRoundDataTT() }, [])
    
    console.log(roundData)
    console.log(roundDataTT)
    
    return (
        <div className='ammo-details-container'>
            <h1>{roundData[1][1]}</h1>
            {/* <img 
                src={`{}`} */}
        </div>
    )
}

export default AmmoDetails