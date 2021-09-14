import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

function Maps () {
    //initialize maps state
    let [maps, setMaps] = useState({factory: 1, customs: 2})

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
            {/* <div className='map-container'>
                <Link to='/Maps/Customs'>
                    <img 
                        src=''
                        className='map-icon'
                        alt='Customs'
                    />
                    <h4 className='map-name'>Customs</h4>
                </Link>
            </div>
            <div className='map-container'>
                <Link to='/Maps/Factory'>
                    <img 
                        src=''
                        className='map-icon'
                        alt='Factory'
                    />
                    <h4 className='map-name'>Factory</h4>
                </Link>
            </div>
            <div className='map-container'>
                <Link to='/Maps/Interchange'>
                    <img 
                        src=''
                        className='map-icon'
                        alt='Interchange'
                    />
                    <h4 className='map-name'>Interchange</h4>
                </Link>
            </div>
            <div className='map-container'>
                <Link to='/Maps/Labs'>
                    <img 
                        src=''
                        className='map-icon'
                        alt='Labs'
                    />
                    <h4 className='map-name'>Labs</h4>
                </Link>
            </div>
            <div className='map-container'>
                <Link to='/Maps/Reserve'>
                    <img 
                        src=''
                        className='map-icon'
                        alt='Reserve'
                    />
                    <h4 className='map-name'>Reserve</h4>
                </Link>
            </div>
            <div className='map-container'>
                <Link to='/Maps/Shoreline'>
                    <img 
                        src=''
                        className='map-icon'
                        alt='Shoreline'
                    />
                    <h4 className='map-name'>Shoreline</h4>
                </Link>
            </div>
            <div className='map-container'>
                <Link to='/Maps/Woods'>
                    <img 
                        src=''
                        className='map-icon'
                        alt='Woods'
                    />
                    <h4 className='map-name'>Woods</h4>
                </Link>
            </div> */}
        </div>
    )
}

export default Maps