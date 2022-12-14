import React from "react";
import './DropMenu.css';
import Button from "../button/Button";

function DropMenu() {
    return (
        <div className="sort-dropdown">
            <span className="sort-dropdown__span"> Sort By:</span>
            <Button onClick={()=>{}} className="sort-dropdown__button">RELEASE DATE
                <div className="sort-dropdown-content">
                    <a href="">THMTH</a>
                    <a href="">THMTH</a>
                    <a href="">THMTH</a>
                </div>
            </Button>
        </div>
    )
}

export default DropMenu;