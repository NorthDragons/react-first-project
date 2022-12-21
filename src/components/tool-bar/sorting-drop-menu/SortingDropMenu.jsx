import React from "react";
import './DropMenu.css';

function SortingDropMenu() {
    return (
        <div className="sort-dropdown">
            <span className="sort-dropdown__span"> SORT BY</span>
            <select className="sort-dropdown__select">
                <option>RELEASE DATE</option>
                <option>TITLE (A-Z)</option>
            </select>
        </div>
    )
}

export default SortingDropMenu;