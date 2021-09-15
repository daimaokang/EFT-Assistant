import React from "react";
import { Link } from 'react-router-dom'

function Maps () {
    return (
        //wrap in dive for one output element
        <div className='maps-page-container'>

            {/* title of page */}
            <h1>Maps</h1>

            <div className='maps-container'>

                {/* wrap each map preview in a div */}
                <div className='map-container'>

                    {/* link to the map details page. I want the the whole preview to be clickable */}
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
                            className='map-icon'
                            alt='Factory'
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
        </div>
    )
}

export default Maps