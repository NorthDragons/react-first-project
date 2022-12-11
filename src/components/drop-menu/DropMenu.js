import React from "react";
import './DropMenu.css';
import Button from "../button/Button";

function DropMenu() {
    return (
        <div className="dropdown">
            <span className="dropdown__span"> Sort By:</span>
            <Button className="dropdown__button">RELEASE DATE
                <div className="dropdown-content">
                    <a href="">THMTH</a>
                    <a href="">THMTH</a>
                    <a href="">THMTH</a>
                </div>
            </Button>
        </div>
    )
}

export default DropMenu;