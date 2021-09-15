import React from "react";
import Customs from "./MapComponents/Customs";
import Factory from "./MapComponents/Factory";
import Interchange from "./MapComponents/Interchange";
import Reserve from "./MapComponents/Reserve";
import Shoreline from "./MapComponents/Shoreline";
import The_Lab from "./MapComponents/The_Lab";
import Woods from "./MapComponents/Woods";

function MapDetails ({ match }) {
    if (match.params.specificMap === 'Customs') {
        return (
            <Customs />
        )
    }
    else if (match.params.specificMap === 'Factory') {
        return (
            <Factory />
        )
    }
    else if (match.params.specificMap === 'Interchange') {
        return (
            <Interchange />
        )
    }
    else if (match.params.specificMap === 'Reserve') {
        return (
            <Reserve />
        )
    }
    else if (match.params.specificMap === 'Shoreline') {
        return (
            <Shoreline />
        )
    }
    else if (match.params.specificMap === 'The_Lab') {
        return (
            <The_Lab />
        )
    }
    else if (match.params.specificMap === 'Woods') {
        return (
            <Woods />
        )
    }
    else {
        return (
            <h2>This page does not exist. Click the header to return home.</h2>
        )
    }
}

export default MapDetails