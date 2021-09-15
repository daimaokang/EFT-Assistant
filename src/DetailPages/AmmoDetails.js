import React, { useState, useEffect } from "react";

function AmmoDetails ({ match }) {
    //initialize round data state
    let [roundData, setRoundData] = useState([])
    //initialize the second set of data for the round
    let [roundDataTT, setRoundDataTT] = useState([])

    //fetch data from public github repository
    //idea to utilize raw link from https://stackoverflow.com/questions/63131453/how-to-fetch-data-from-a-particular-github-txt-file-in-html-page-via-javascript
    //it is called ammo data becuase the response has data on all ammo, not just desired round
    function fetchAmmoData() {
    fetch('https://raw.githubusercontent.com/TarkovTracker/tarkovdata/master/ammunition.json')
        .then (response => response.json())
        // use object.entries to convert object to array. use match params to identify desired round
        .then(responseJSON => setRoundData(responseJSON[match.params.specificRound]))
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
    useEffect(() =>  fetchAmmoData(), [])
    //same thing but fetching from api
    useEffect(() => fetchRoundDataTT(), [])

    if((roundData.length < 1) || (roundDataTT.length < 1)){
        return (<h1>Loading...</h1>)
    }
    else {
        return (
            <div className='ammo-details-container'>
                <h1>{roundData.name}</h1>
                <img 
                    src={`${roundDataTT.imageLink}`}
                    alt={roundData.name}
                />
                <div className='performance-data'>
                    <h3>Flesh Damage: { roundData.ballistics.damage }</h3>
                    <h3>Armor Penetration: { roundData.ballistics.penetrationPower }</h3>
                    <h3>Bullet Velocity: { roundData.ballistics.initialSpeed } m/s</h3>
                    <h3>Fragmentation Chance: { roundData.ballistics.fragmentationChance*100 }%</h3>
                    <h3>Accuracy Modifier: { roundData.ballistics.accuracy }%</h3>
                    <h3>Recoil Modifier: { roundData.ballistics.recoil }</h3>
                    <h3>Weight per round: { roundData.weight }kg</h3>
                </div>
                <div className='price-data'>
                    <h3>Average Flea-Market Price (past 24hrs): { roundDataTT.avg24hPrice }₽</h3>
                    <h3>Low Flea-Market Price (past 24hrs): { roundDataTT.low24hPrice }₽</h3>
                    <h3>High Flea-Market Price (past 24hrs): { roundDataTT.high24hPrice }₽</h3>
                </div>
            </div>
        )
    }
}

export default AmmoDetails