import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

function Maps () {
    //initialize maps state
    let [maps, setMaps] = useState({})

    //fetch data from public github repository
    //idea to utilize raw link from https://stackoverflow.com/questions/63131453/how-to-fetch-data-from-a-particular-github-txt-file-in-html-page-via-javascript
    function fetchMaps() {
    fetch('https://raw.githubusercontent.com/TarkovTracker/tarkovdata/master/maps.json')
        .then (response => response.json())
        .then(responseJSON => setMaps(responseJSON))
    }
    useEffect(() => { fetchMaps() }, [])
    console.log(maps)
    console.log(Object.entries(maps))
    return (
        <div className='maps-container'>
            <h1>Maps</h1>

            <div className='map-container'>
                <Link to='/Maps/Customs'>
                    <img 
                        src='https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/9f/Customs_Banner.png'
                        className='map-icon'
                        alt='Customs'
                    />
                    <h4 className='map-name'>Customs</h4>
                </Link>
            </div>
            <div className='map-container'>
                <Link to='/Maps/Factory'>
                    <img 
                        src='https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/1a/Factory-Day_Banner.png'
                    />
                    <h4 className='map-name'>Factory</h4>
                </Link>
            </div>
            <div className='map-container'>
                <Link to='/Maps/Interchange'>
                    <img 
                        src='https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/3e/Banner_interchange.png'
                        className='map-icon'
                        alt='Interchange'
                    />
                    <h4 className='map-name'>Interchange</h4>
                </Link>
            </div>
            <div className='map-container'>
                <Link to='/Maps/The_Lab'>
                    <img 
                        src='https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d7/TheLabBanner.png'
                        className='map-icon'
                        alt='Labs'
                    />
                    <h4 className='map-name'>The Lab</h4>
                </Link>
            </div>
            <div className='map-container'>
                <Link to='/Maps/Reserve'>
                    <img 
                        src='https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/f4/Reserve.png'
                        className='map-icon'
                        alt='Reserve'
                    />
                    <h4 className='map-name'>Reserve</h4>
                </Link>
            </div>
            <div className='map-container'>
                <Link to='/Maps/Shoreline'>
                    <img 
                        src='https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d5/Banner_shoreline.png'
                        className='map-icon'
                        alt='Shoreline'
                    />
                    <h4 className='map-name'>Shoreline</h4>
                </Link>
            </div>
            <div className='map-container'>
                <Link to='/Maps/Woods'>
                    <img 
                        src='https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/3e/Banner_woods.png'
                        className='map-icon'
                        alt='Woods'
                    />
                    <h4 className='map-name'>Woods</h4>
                </Link>
            </div>
        </div>
    )
}

export default Maps