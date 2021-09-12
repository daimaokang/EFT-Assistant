import React from "react";
import { Link } from 'react-router-dom'

function Header () {
    return (
        <header>
            <Link to='/'>
                <h1>Escape From Tarkov Assistant</h1>
            </Link>
        </header>
    )
}

export default Header