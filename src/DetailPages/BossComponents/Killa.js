import React from "react";

function Killa () {
    return (
        //wrap in div
        <div className='boss-details-container'>

            <h1 className='boss-name'>Killa</h1>

            <div className='boss-tips'>
                <p className='hp-data'>Killa has 890 total health, the thorax having 210, and the head having 70. He is heavily armored. The popular 'Killa Armor' (6B13 M assault armor (tan)) is class 5, and the iconic healmet (Maska 1Sch & Maska 1Sh face shield (Killa)) are class 4 and 6 respectively.</p>
            </div>

            <div className='spawn-container'>
                <p>Killa is the boss of the Interchange map and has a 33% spawn chance. He can spawn almost anywhere inside the mall, on any floor. If a PMC opens the Kiba Arms shop, Killa will rush to the location.</p>
            </div>

            <div className='guards-container'>
                <p className='guard-tips'>Killa has no guards.</p>
            </div>
        </div>
    )
}

export default Killa