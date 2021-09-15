import React from "react";

function Tagilla () {
    return (
        //wrap in div
        <div className='boss-details-container'>

            <h1 className='boss-name'>Tagilla</h1>

            <div className='boss-tips'>
                <p className='hp-data'>Tagilla has 1220 total health, the thorax having 320, and the head having 100. He is heavily armored. He wears a class 6 armored rig (Crye Precision AVS MBAV (Tagilla Edition)) with a middle finger painted on the back, and an iconic class 5 welding mask helmet/faceshield (Tagilla's welding mask ("UBEY" / "Gorilla") with a gorillas face painted on or the word "UBEY".</p>
            </div>

            <div className='spawn-container'>
                <p>Tagilla is the boss of the Factory map and has a 18% spawn chance. He mostly spawns near the pit and underground.</p>
            </div>

            <div className='guards-container'>
                <p className='guard-tips'>Tagilla has no guards.</p>
            </div>
        </div>
    )
}

export default Tagilla