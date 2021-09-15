import React, { useState, useEffect } from "react";

function AmmoDetails ({ match }) {
    //initialize ammo state
    let [ammoData, setAmmoData] = useState({})
    //initialize round data state
    let [roundData, setRoundData] = useState({})

    //fetch data from public github repository
    //idea to utilize raw link from https://stackoverflow.com/questions/63131453/how-to-fetch-data-from-a-particular-github-txt-file-in-html-page-via-javascript
    function fetchAmmoData() {
    fetch('https://raw.githubusercontent.com/TarkovTracker/tarkovdata/master/ammunition.json')
        .then (response => response.json())
        .then(responseJSON => setAmmoData(responseJSON))
    }

    //create function to set round data according to match params and ammo data
    function defineRound() {
        let temporaryVariableForID = match.params.specificRound
        setRoundData(ammoData[temporaryVariableForID])
    }

    //utilize useEffect to fetch data on component mount
    useEffect(() => { fetchAmmoData() }, [])

    useEffect(() => { defineRound() }, Object.entries(ammoData))
    
    console.log(ammoData)
    console.log(Object.entries(ammoData))

    console.log(roundData)
    
    return (
        <div classname='ammo-details-container'>
            <h1>{roundData.name}</h1>
            {/* <img 
                src={`{}`} */}
        </div>
    )
}

export default AmmoDetails