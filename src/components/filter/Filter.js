import React from "react";
import './Filter.css'

function Filter() {
    return (
        <div className="filter">
            <ul className="filter__button-group">
                <li>
                    <button className='active' role="button">ALL</button>
                </li>
                <li>
                    <button role="button">DOCUMENTARY</button>
                </li>
                <li>
                    <button role="button">CCOMEDY</button>
                </li>
                <li>
                    <button role="button">HORROR</button>
                </li>
                <li>
                    <button role="button">CRIME</button>
                </li>
            </ul>
        </div>
    );
}

export default Filter;