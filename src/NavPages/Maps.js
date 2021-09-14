import React from "react";
import { Link } from 'react-router-dom'

function Maps () {
    return (
        <div className='maps-container'>
            <h1>Maps</h1>
            <div className='map-container'>
                <Link to='/Maps/Customs'>
                    <img 
                        src=''
                        className='map-icon'
                    />
                    <h4 className='map-name'>Customs</h4>
                </Link>
            </div>
            <div className='map-container'>
                <Link to='/Maps/Factory'>
                    <img 
                        src=''
                        className='map-icon'
                    />
                    <h4 className='map-name'>Factory</h4>
                </Link>
            </div>
            <div className='map-container'>
                <Link to='/Maps/Interchange'>
                    <img 
                        src=''
                        className='map-icon'
                    />
                    <h4 className='map-name'>Interchange</h4>
                </Link>
            </div>
            <div className='map-container'>
                <Link to='/Maps/Labs'>
                    <img 
                        src=''
                        className='map-icon'
                    />
                    <h4 className='map-name'>Labs</h4>
                </Link>
            </div>
            <div className='map-container'>
                <Link to='/Maps/Reserve'>
                    <img 
                        src=''
                        className='map-icon'
                    />
                    <h4 className='map-name'>Reserve</h4>
                </Link>
            </div>
            <div className='map-container'>
                <Link to='/Maps/Shoreline'>
                    <img 
                        src=''
                        className='map-icon'
                    />
                    <h4 className='map-name'>Shoreline</h4>
                </Link>
            </div>
            <div className='map-container'>
                <Link to='/Maps/Woods'>
                    <img 
                        src=''
                        className='map-icon'
                    />
                    <h4 className='map-name'>Woods</h4>
                </Link>
            </div>
        </div>
    )
}

export default Maps