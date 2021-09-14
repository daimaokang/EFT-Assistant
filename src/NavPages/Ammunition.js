import React, { useState, useEffect} from "react";
import { Link } from 'react-router-dom'

function Ammunition () {
    //initialize ammo data state
    let [ammo, setAmmo] = useState([])

    //create function to fetch ammo data from tarkov-tools api and store it in smmo state
    function fetchAmmoTT () {        
        //copy paste fetch request from Browser JS example in documentation at tarkov-tools.com/api/
        fetch('https://tarkov-tools.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({query: `{
                itemsByType(type: ammo) {
                    id
                    name
                    normalizedName
                    iconLink
                }
            }`})
        })
            .then(response => response.json())
            .then(responseJSON => setAmmo(responseJSON.data.itemsByType));
    }

    //utilize useEffect to fetch data on component mount
    useEffect(() => { fetchAmmoTT() }, [])

    console.log(ammo)

    //return page elements
    return (
        <div className='ammunition-container'>
            <h1>Ammunition</h1>
            <div className='caliber-container'>
                <h2 className='caliber'>5.56x45mm</h2>
                <h5 className='compatible-weapons'>(M4A1 / HK / MDR / ADAR)</h5>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === '5.56x45mm') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
                                        alt={ammoData.name}
                                    />
                                    <h4 className='round-name'>
                                        { ammoData.name }
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='caliber-container'>
                <h2 className='caliber'>7.62x39mm</h2>
                <h5 className='compatible-weapons'>(Mk47 / AK-103 / AKM)</h5>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === '7.62x39mm') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
                                        alt={ammoData.name}
                                    />
                                    <h4 className='round-name'>
                                        { ammoData.name }
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='caliber-container'>
                <h2 className='caliber'>7.62x51mm</h2>
                <h5 className='compatible-weapons'>(M1A / SR-25 / SA-58 / MDR / M700 / Vepr Hunter)</h5>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === '7.62x51mm') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
                                        alt={ammoData.name}
                                    />
                                    <h4 className='round-name'>
                                        { ammoData.name }
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='caliber-container'>
                <h2 className='caliber'>7.62x54mmR</h2>
                <h5 className='compatible-weapons'>GUNS</h5>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === '7.62x54R') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
                                        alt={ammoData.name}
                                    />
                                    <h4 className='round-name'>
                                        { ammoData.name }
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='caliber-container'>
                <h2 className='caliber'>4.6x30mm</h2>
                <h5 className='compatible-weapons'>(MP7)</h5>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === '4.6x30mm') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
                                        alt={ammoData.name}
                                    />
                                    <h4 className='round-name'>
                                        { ammoData.name }
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='caliber-container'>
                <h2 className='caliber'>5.45x39mm</h2>
                <h5 className='compatible-weapons'>(RPK / AK-105 / AK-74 / AKS-74)</h5>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === '5.45x39mm') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
                                        alt={ammoData.name}
                                    />
                                    <h4 className='round-name'>
                                        { ammoData.name }
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='caliber-container'>
                <h2 className='caliber'>5.7x28mm</h2>
                <h5 className='compatible-weapons'>(P90 / 5-7)</h5>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === '5.7x28mm') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
                                        alt={ammoData.name}
                                    />
                                    <h4 className='round-name'>
                                        { ammoData.name }
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='caliber-container'>
                <h2 className='caliber'>9x19mm</h2>
                <h5 className='compatible-weapons'>(MP5 / Vector / PP-19 / Glock)</h5>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === '9x19mm') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
                                        alt={ammoData.name}
                                    />
                                    <h4 className='round-name'>
                                        { ammoData.name }
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='caliber-container'>
                <h2 className='caliber'>9x39mm</h2>
                <h5 className='compatible-weapons'>(AS VAL / VSS)</h5>
                {ammo.map( (ammoData) => {
                    if ((ammoData.name.split(' ')[0] === '9x39mm') || (ammoData.name.split(' ')[0] === '9x39')) {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
                                        alt={ammoData.name}
                                    />
                                    <h4 className='round-name'>
                                        { ammoData.name }
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='caliber-container'>
                <h2 className='caliber'>.338</h2>
                <h5 className='compatible-weapons'>(MK-18)</h5>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === '.338') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
                                        alt={ammoData.name}
                                    />
                                    <h4 className='round-name'>
                                        { ammoData.name }
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='caliber-container'>
                <h2 className='caliber'>.366 TKM</h2>
                <h5 className='compatible-weapons'>(VPO)</h5>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === '.366') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
                                        alt={ammoData.name}
                                    />
                                    <h4 className='round-name'>
                                        { ammoData.name }
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='caliber-container'>
                <h2 className='caliber'>.300</h2>
                <h5 className='compatible-weapons'>(MCX)</h5>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === '.300') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
                                        alt={ammoData.name}
                                    />
                                    <h4 className='round-name'>
                                        { ammoData.name }
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='caliber-container'>
                <h2 className='caliber'>12.7x55mm</h2>
                <h5 className='compatible-weapons'>(ASh-12)</h5>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === '12.7x55') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
                                        alt={ammoData.name}
                                    />
                                    <h4 className='round-name'>
                                        { ammoData.name }
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='caliber-container'>
                <h2 className='caliber'>.45 ACP</h2>
                <h5 className='compatible-weapons'>(UMP-45 / Vector)</h5>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === '.45') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
                                        alt={ammoData.name}
                                    />
                                    <h4 className='round-name'>
                                        { ammoData.name }
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='caliber-container'>
                <h2 className='caliber'>12 Gauge</h2>
                <h5 className='compatible-weapons'>(MP-153 / Saiga)</h5>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === '12/70') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
                                        alt={ammoData.name}
                                    />
                                    <h4 className='round-name'>
                                        { ammoData.name }
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='caliber-container'>
                <h2 className='caliber'>23x75mm</h2>
                <h5 className='compatible-weapons'>(KS-23M)</h5>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === '23x75mm') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
                                        alt={ammoData.name}
                                    />
                                    <h4 className='round-name'>
                                        { ammoData.name }
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='caliber-container'>
                <h2 className='caliber'>20 Gauge</h2>
                <h5 className='compatible-weapons'>GUNS</h5>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === '20/70') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
                                        alt={ammoData.name}
                                    />
                                    <h4 className='round-name'>
                                        { ammoData.name }
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='caliber-container'>
                <h2 className='caliber'>9x21mm</h2>
                <h5 className='compatible-weapons'>(SR-1MP)</h5>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === '9x21mm') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
                                        alt={ammoData.name}
                                    />
                                    <h4 className='round-name'>
                                        { ammoData.name }
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='caliber-container'>
                <h2 className='caliber'>9x18mm</h2>
                <h5 className='compatible-weapons'>(Kedr / Makarov)</h5>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === '9x18mm') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
                                        alt={ammoData.name}
                                    />
                                    <h4 className='round-name'>
                                        { ammoData.name }
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='caliber-container'>
                <h2 className='caliber'>7.62x25mm</h2>
                <h5 className='compatible-weapons'>(TT)</h5>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === '7.62x25mm') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
                                        alt={ammoData.name}
                                    />
                                    <h4 className='round-name'>
                                        { ammoData.name }
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Ammunition