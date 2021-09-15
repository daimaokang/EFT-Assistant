import React from "react";

function Sanitar () {
    return (
        //wrap in div
        <div className='boss-details-container'>

            <h1 className='boss-name'>Sanitar</h1>

            <div className='boss-tips'>
                <p className='hp-data'>Sanitar has 1270 total health, the thorax having 360, and the head having 70. He does not wear armor. Sanitar's guards have 1055 total health points. The thorax has 200 and the head has 55.</p>
            </div>

            <div className='spawn-container'>
                <p>Sanitar is the boss of the Shoreline map and has a 32% spawn chance. He can spawn at the port, the resort, or the villa / construction area. He spawns with two guards but often surrounds himself with other scavs.</p>
            </div>

            <div className='guards-container'>
                <h2>Guards</h2>
                
                <p className='guard-tips'>Most of Sanitar's guards' names are medical professions in Russian. They generally sound medicine related, with one even being the stimulant Propital. These traits make the guards somewhat easy to identify as boss followers on the end-of-raid screen.</p>

                <h3>Guard Names</h3>

                <ul className='guard-list'>
                    <li className='guard'>Akusher</li>
                    <li className='guard'>Anesteziolog</li>
                    <li className='guard'>Dermatolog</li>
                    <li className='guard'>Farmacevt</li>
                    <li className='guard'>Feldsher</li>
                    <li className='guard'>Fiziolog</li>
                    <li className='guard'>Glavvrach</li>
                    <li className='guard'>Gomeopat</li>
                    <li className='guard'>Hirurg</li>
                    <li className='guard'>Immunolog</li>
                    <li className='guard'>Kardiolog</li>
                    <li className='guard'>Laborant</li>
                    <li className='guard'>Lasha Ortoped</li>
                    <li className='guard'>Lor</li>
                    <li className='guard'>Medbrat</li>
                    <li className='guard'>Medsestra</li>
                    <li className='guard'>Nevrolog</li>
                    <li className='guard'>Okulist</li>
                    <li className='guard'>Paracetamol</li>
                    <li className='guard'>Pilyulya</li>
                    <li className='guard'>Proktolog</li>
                    <li className='guard'>Propital</li>
                    <li className='guard'>Psihiatr</li>
                    <li className='guard'>Psikhiatr</li>
                    <li className='guard'>Pyotr Planchik</li>
                    <li className='guard'>Revmatolog</li>
                    <li className='guard'>Rodion Bubesh</li>
                    <li className='guard'>Scavvaf</li>
                    <li className='guard'>Shpric</li>
                    <li className='guard'>Stomatolog</li>
                    <li className='guard'>Terapevt</li>
                    <li className='guard'>Travmatolog</li>
                    <li className='guard'>Trupovoz</li>
                    <li className='guard'>Urolog</li>
                    <li className='guard'>Vaha Geroy</li>
                    <li className='guard'>Venerolog</li>
                    <li className='guard'>Zaveduyuschiy</li>
                    <li className='guard'>Zhgut</li>
                </ul>
            </div>
        </div>
    )
}

export default Sanitar