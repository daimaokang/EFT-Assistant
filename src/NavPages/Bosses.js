import React from "react";
import { Link } from 'react-router-dom'

function Bosses () {
    return (
        <div className='bosses-container'>
            <h1>Bosses</h1>
            <div className='boss-container'>
                <Link to='/Bosses/Glukhar'>
                    <img 
                        src='https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/4/44/Gluhar_Portrait.PNG'
                        className='boss-icon'
                        alt='Glukhar'
                        />
                    <h4 className='boss-name'>Glukhar</h4>
                </Link>
            </div>
            <div className='boss-container'>
                <Link to='/Bosses/Killa'>
                    <img 
                        src='https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/ac/Killa_Portrait.png'
                        className='boss-icon'
                        alt='Killa'
                    />
                    <h4 className='boss-name'>Killa</h4>
                </Link>
            </div>
            <div className='boss-container'>
                <Link to='/Bosses/Reshala'>
                    <img 
                        src='https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/1a/Dealmaker_Portrait.png'
                        className='boss-icon'
                        alt='Reshala'
                    />
                    <h4 className='boss-name'>Reshala</h4>
                </Link>
            </div>
            <div className='boss-container'>
                <Link to='/Bosses/Sanitar'>
                    <img 
                        src='https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/23/Sanitar_Portrait.png'
                        className='boss-icon'
                        alt='Sanitar'
                    />
                    <h4 className='boss-name'>Sanitar</h4>
                </Link>
            </div>
            <div className='boss-container'>
                <Link to='/Bosses/Shturman'>
                    <img 
                        src='https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/3f/Shturman_Portrait.png'
                        className='boss-icon'
                        alt='Shturman'
                    />
                    <h4 className='boss-name'>Shturman</h4>
                </Link>
            </div>
            <div className='boss-container'>
                <Link to='/Bosses/Tagilla'>
                    <img 
                        src='https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/5/57/Kuvalda_FactoryBoss_Screenshot.png'
                        className='boss-icon'
                        alt='Tagilla'
                    />
                    <h4 className='boss-name'>Tagilla</h4>
                </Link>
            </div>
        </div>
    )
}

export default Bosses