import React from "react";
import { Link } from "react-router-dom";

function Home () {
    return (
        <div className='home-container'>
            <div className='home-nav'>
                <Link to='/Ammunition'>
                    <div className='nav-container'>
                        <img 
                            className='home-preview'
                            src='https://static.wikia.nocookie.net/escape-from-tarkov/images/c/cc/Ammo_box_7_front.png'
                            alt='a case of PS gzh ammo'
                        />
                        <h3 className='home-nav-name'>Ammunition</h3>
                    </div>
                </Link>
            </div>
            <div className='home-nav'>
                <Link to='/Maps'>
                    <div className='nav-container'>
                        <img 
                            className='home-preview'
                            src='https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/5/55/Map_Item.png'
                            alt='in game item map of interchange'
                        />
                        <h3 className='home-nav-name'>Maps</h3>
                    </div>
                </Link>
            </div>
            <div className='home-nav'>
                <Link to='/Bosses'>
                    <div className='nav-container'>
                        <img 
                            className='home-preview'
                            src='https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/ca/TheBossesgathering_banner.png'
                            alt='the bosses gathered'
                        />
                        <h3 className='home-nav-name'>Bosses</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home