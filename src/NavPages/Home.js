import React from "react";
import { Link } from "react-router-dom";

function Home () {
    return (
        <div className='home-container'>
            <Link to='/Ammunition'>
                <h3>insert ammunition preview</h3>
            </Link>
            <Link to='/Maps'>
                <h3>insert maps preview</h3>
            </Link>
            <Link to='/Bosses'>
                <h3>insert bosses preview</h3>
            </Link>
        </div>
    )
}

export default Home