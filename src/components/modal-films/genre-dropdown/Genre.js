import "./GenreStyle.css"
import {useState} from "react";

function CheckBox() {
    return (

        <div className="multiselect">
            <div className="selectBox">
                <select className={"selectBox__select"}>
                    <option>Select an option</option>
                </select>
                <div className="selectBox__overSelect"></div>
                <div className="checkboxes">
                    <label htmlFor="documentary">
                        <input type="checkbox" id="documentary"/><span>Documentary</span></label>
                    <label htmlFor="comedy">
                        <input type="checkbox" id="comedy"/><span>Comedy</span></label>
                    <label htmlFor="horror">
                        <input type="checkbox" id="horror"/><span>Horror</span></label>
                    <label htmlFor="crime">
                        <input type="checkbox" id="crime"/><span>Crime</span></label>
                </div>
            </div>
        </div>
    )
}

export default CheckBox;