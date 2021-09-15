import React from "react";
import Glukhar from './BossComponents/Glukhar'
import Killa from './BossComponents/Killa'
import Reshala from './BossComponents/Reshala'
import Sanitar from './BossComponents/Sanitar'
import Shturman from './BossComponents/Shturman'
import Tagilla from './BossComponents/Tagilla'

function BossDetails ({ match }) {
    if ( match.params.specificBoss === 'Glukhar' ) {
        return(
            <Glukhar />
        )
    }
    else if ( match.params.specificBoss === 'Killa' ) {
        return(
            <Killa />
        )
    }
    else if ( match.params.specificBoss === 'Reshala' ) {
        return(
            <Reshala />
        )
    }
    else if ( match.params.specificBoss === 'Sanitar' ) {
        return(
            <Sanitar />
        )
    }
    else if ( match.params.specificBoss === 'Shturman' ) {
        return(
            <Shturman />
        )
    }
    else if ( match.params.specificBoss === 'Tagilla' ) {
        return(
            <Tagilla />
        )
    }
    else {
        return (
            <h2>This page does not exist. Click the header to return home.</h2>
        )
    }
}

export default BossDetails