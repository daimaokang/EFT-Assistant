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
                <h5 className='compatible-weapons'>GUNS</h5>
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
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === 'INSERTCALIBER') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
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
                <h2 className='caliber'>INSERTCALIBER</h2>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === 'INSERTCALIBER') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
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
                <h2 className='caliber'>INSERTCALIBER</h2>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === 'INSERTCALIBER') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
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
                <h2 className='caliber'>INSERTCALIBER</h2>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === 'INSERTCALIBER') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
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
                <h2 className='caliber'>INSERTCALIBER</h2>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === 'INSERTCALIBER') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
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
                <h2 className='caliber'>INSERTCALIBER</h2>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === 'INSERTCALIBER') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
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
                <h2 className='caliber'>INSERTCALIBER</h2>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === 'INSERTCALIBER') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
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
                <h2 className='caliber'>INSERTCALIBER</h2>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === 'INSERTCALIBER') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
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
                <h2 className='caliber'>INSERTCALIBER</h2>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === 'INSERTCALIBER') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
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
                <h2 className='caliber'>INSERTCALIBER</h2>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === 'INSERTCALIBER') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
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
                <h2 className='caliber'>INSERTCALIBER</h2>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === 'INSERTCALIBER') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
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
                <h2 className='caliber'>INSERTCALIBER</h2>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === 'INSERTCALIBER') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
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
                <h2 className='caliber'>INSERTCALIBER</h2>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === 'INSERTCALIBER') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
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
                <h2 className='caliber'>INSERTCALIBER</h2>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === 'INSERTCALIBER') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
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
                <h2 className='caliber'>INSERTCALIBER</h2>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === 'INSERTCALIBER') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
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
                <h2 className='caliber'>INSERTCALIBER</h2>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === 'INSERTCALIBER') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
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
                <h2 className='caliber'>INSERTCALIBER</h2>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === 'INSERTCALIBER') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
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
                <h2 className='caliber'>INSERTCALIBER</h2>
                {ammo.map( (ammoData) => {
                    if (ammoData.name.split(' ')[0] === 'INSERTCALIBER') {
                        return(
                            <div className='round-container' key={ammoData.id}>
                                <Link
                                    to={`/Ammunition/${ammoData.normalizedName}`}
                                >
                                    <img
                                        src={ammoData.iconLink}
                                        className='round-icon'
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