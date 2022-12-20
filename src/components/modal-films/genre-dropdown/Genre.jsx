import "./GenreStyle.css"
import {useState} from "react";

function CheckBox(props) {

    const [genreValue, setGenreValue] = useState(props.genre ? props.genre : "Select Genre")
    let [valueSet, setValueSet] = useState(new Set());

    function setValue(value) {
        let valueSetCopy = new Set(valueSet)
        if (valueSet.size > 0 && valueSetCopy.has(value.target.value)) {
            if (valueSet.size === 1) {
                setValueSet(new Set())
            } else {
                setValueSet(valueSetCopy.delete(value.target.value))
            }
        } else {
            setValueSet(valueSetCopy.add(value.target.value));
        }
        console.log(Array.from(valueSet).join(" ").toString())
        test(valueSet)
        setGenreValue(Array.from(valueSet).join(", ").toString())
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

export default CheckBox;