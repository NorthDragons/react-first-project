import React from 'react';
import "./Header.css";
import Button from "../button/Button";
import Logo from "../logo/Logo";

function Header({showButton}) {
    return (
        <div className="header">
            <Logo/>
            {showButton && <Button className='header__button' role="button">
                + ADD MOVIE
            </Button>}
        </div>
    );

}

export default Header; 