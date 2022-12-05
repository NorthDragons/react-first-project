import React from 'react';
import "./Header.css";
import { logo } from './../logo/Logo.js';

function Header( {showButton}) {
    return (
        <React.Fragment>
            <div className="header">
                {logo}
                {showButton && <button role="button">
                    + ADD MOVIE
                </button>}
            </div>
        </React.Fragment>
    );

}

export default Header; 