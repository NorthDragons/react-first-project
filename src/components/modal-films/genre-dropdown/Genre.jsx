import "./GenreStyle.css"
import {useState} from "react";
import PropTypes from "prop-types";

function CheckBox({onChange, genre}) {

    const [genreValue, setGenreValue] = useState(genre ? genre : "Select Genre")
    const [valueSet, setValueSet] = useState(new Set());

    function setValue(e) {
        const value = e.target.value;
        if (valueSet.has(value)) {
            valueSet.delete(value)
        } else {
            setValueSet(valueSet.add(value))
        }
        onChange({target: {name: "genre", value: Array.from(valueSet)}})
        setGenreValue(Array.from(valueSet).toString())
    }

    return (
        <div className="multiselect">
            <div className="selectBox">
                <select className={"selectBox__select"}>
                    <option>{genreValue}</option>
                </select>
                <div className="selectBox__overSelect"></div>
                <div className="checkboxes">
                    <label htmlFor="documentary">
                        <input onChange={e => setValue(e)} type="checkbox" value={"Documentary"}
                               id="documentary"/><span>Documentary</span></label>
                    <label htmlFor="comedy">
                        <input onChange={e => setValue(e)} type="checkbox" value={"Comedy"}
                               id="comedy"/><span>Comedy</span></label>
                    <label htmlFor="horror">
                        <input onChange={e => setValue(e)} type="checkbox" value={"Horror"}
                               id="horror"/><span>Horror</span></label>
                    <label htmlFor="crime">
                        <input onChange={e => setValue(e)} type="checkbox" value={"Crime"}
                               id="crime"/><span>Crime</span></label>
                </div>
            </div>
        </div>
    )
}

CheckBox.propTypes = {
    genre: PropTypes.string
}
export default CheckBox;