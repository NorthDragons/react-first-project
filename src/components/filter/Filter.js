import React from "react";
import './Filter.css'
import Button from "../button/Button";

function Filter() {
    return (
        <div className="filter">
            <ul className="filter__button-group">
                <li>
                    <Button active>ALL</Button>
                </li>
                <li>
                    <Button>DOCUMENTARY</Button>
                </li>
                <li>
                    <Button>COMEDY</Button>
                </li>
                <li>
                    <Button>HORROR</Button>
                </li>
                <li>
                    <Button>CRIME</Button>
                </li>
            </ul>
        </div>
    );
}

export default Filter;