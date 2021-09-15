import React from "react";

function Shturman () {
    return (
        //wrap in div
        <div className='boss-details-container'>

            <h1 className='boss-name'>Shturman</h1>

            <div className='boss-tips'>
                <p className='hp-data'>Shturman has 812 total health, the thorax having 180, and the head having 62. He does not wear armor. Shturman's guards have 740 total health points. The thorax has 138 and the head has 62.</p>
            </div>

            <div className='spawn-container'>
                <p>Shturman is the boss of the Woods map and has a 33% spawn chance. He can spawn at the lumber mill area, and nearby having been sighted at the nearby tent and along the nearby road. He spawns with two guards.</p>
            </div>

            <div className='guards-container'>
                <h2>Guards</h2>
                
                <p className='guard-tips'>All of Shturman's guards share the Svetloozerskiy last name, making them easy to identify as boss followers on the end-of-raid screen.</p>

                <h3>Guard Names</h3>

                <ul className='guard-list'>
                    <li className='guard'>Dimon Svetloozerskiy</li>
                    <li className='guard'>Enchik Svetloozerskiy</li>
                    <li className='guard'>Kachok Svetloozerskiy</li>
                    <li className='guard'>Krysa Svetloozerskiy</li>
                    <li className='guard'>Malchik Svetloozerskiy</li>
                    <li className='guard'>Marat Svetloozerskiy</li>
                    <li className='guard'>Mels Svetloozerskiy</li>
                    <li className='guard'>Motlya Svetloozerskiy</li>
                    <li className='guard'>Motyl Svetloozerskiy</li>
                    <li className='guard'>Pashok Svetloozerskiy</li>
                    <li className='guard'>Robinzon Svetloozerskiy</li>
                    <li className='guard'>Sanya Svetloozerskiy</li>
                    <li className='guard'>Shmyga Svetloozerskiy</li>
                    <li className='guard'>Toha Svetloozerskiy</li>
                    <li className='guard'>Ugryum Svetloozerskiy</li>
                    <li className='guard'>Vovan Svetloozerskiy</li>
                </ul>
            </div>
        </div>
    )
}

export default Shturman