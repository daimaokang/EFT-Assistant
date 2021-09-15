import React from "react";
import { Link } from 'react-router-dom'

function Header () {
    return (
        // header that has links to main pages
        <header>
            <Link to='/'>
                <h3>Escape From Tarkov Assistant</h3>
            </Link>
        </header>
    )
}

export default Header