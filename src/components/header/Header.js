import React from 'react';
import "./Header.css";
import { logo } from './../logo/Logo.js';

function Header( {showButton}) {
    return (
            <div className="header">
                {logo}
                {showButton && <button className='header__button' role="button">
                    + ADD MOVIE
                </button>}
            </div>
    );

}

export default Header; 