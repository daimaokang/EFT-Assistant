import React, { useState, useEffect } from "react";

function AmmoDetails () {
    //initialize ammo data state
    let [ammo, setAmmo] = useState([])

    //create function to fetch ammo data from tarkov-tools api and store it in smmo state
    function fetchAmmoTT () {        
        //copy paste fetch request from Browser JS example in documentation at tarkov-tools.com/api/
        fetch('https://tarkov-tools.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({query: `{
                item(id: 54527ac44bdc2d36668b4567) {
                    id
                    name
                    normalizedName
                    iconLink
                    link
                }
            }`})
        })
            .then(response => response.json())
            .then(responseJSON => setAmmo(responseJSON));
    }

    //utilize useEffect to fetch data on component mount
    useEffect(() => { fetchAmmoTT() }, [])
    
    console.log(ammo)
    
    return (
        <h1>Ammo Details</h1>
    )
}

export default AmmoDetails