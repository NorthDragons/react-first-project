import React from "react";
import './Filter.css'
import Button from "../button/Button";

function Filter() {
    return (
        <div className="filter">
            <ul className="filter__button-group">
                <li>
                    <Button children={'ALL'} active/>
                </li>
                <li>
                    <Button children={'DOCUMENTARY'}/>
                </li>
                <li>
                    <Button children={'COMEDY'}/>
                </li>
                <li>
                    <Button children={'HORROR'}/>
                </li>
                <li>
                    <Button children={'CRIME'}/>
                </li>
            </ul>
        </div>
    );
}

export default Filter;