import React from "react";

function Reshala () {
    return (
        //wrap in div
        <div className='boss-details-container'>

            <h1 className='boss-name'>Reshala</h1>

            <div className='boss-tips'>
                <p className='hp-data'>Reshala has 752 total health, the thorax having 145, and the head having 62. He does not wear armor. Reshala's guards have 630 total health points. The thorax has 140 and the head has 50.</p>
            </div>

            <div className='spawn-container'>
                <p>Reshala is the boss of the Customs map and has a 33% spawn chance. He can spawn at the fortress/stronghold building, the dorms area, or the new gas station area. He spawns with four guards.</p>
            </div>

            <div className='guards-container'>
                <h2>Guards</h2>
                
                <p className='guard-tips'>All of Reshala's guards share the Zavodskoy last name, making them easy to identify as boss followers on the end-of-raid screen.</p>

                <h3>Guard Names</h3>

                <ul className='guard-list'>
                    <li className='guard'>Anton Zavodskoy</li>
                    <li className='guard'>Stas Zavodskoy</li>
                    <li className='guard'>Gena Zavodskoy</li>
                    <li className='guard'>Zhora Zavodskoy</li>
                    <li className='guard'>Sanya Zavodskoy</li>
                    <li className='guard'>Vitek Zavodskoy</li>
                    <li className='guard'>Kolyan Zavodskoy</li>
                    <li className='guard'>Lesha Zavodskoy</li>
                    <li className='guard'>Skif Zavodskoy</li>
                    <li className='guard'>Toha Zavodskoy</li>
                    <li className='guard'>Kuling Zavodskoy</li>
                    <li className='guard'>Filya Zavodskoy</li>
                    <li className='guard'>Grisha Zavodskoy</li>
                    <li className='guard'>Shtopor Zavodskoy</li>
                    <li className='guard'>Vasya Zavodskoy</li>
                    <li className='guard'>Torpeda Zavodskoy</li>
                    <li className='guard'>Damirka Zavodskoy</li>
                </ul>
            </div>
        </div>
    )
}

export default Reshala