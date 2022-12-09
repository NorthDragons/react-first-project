import React from "react";
import './DropMenu.css';
import Button from "../button/Button";

function DropMenu() {
    return (
<select>
    <option value='value1'>test</option>
    <option value='value1'>test</option>
    <option value='value1'>test</option>
</select>
        // <div className="dropdown">
        //     <span className="dropdown__span"> Sort By:</span>
        //     <Button children={'RELEASE DATE'} className="dropdown__button" onClick={() => {
        //         document.getElementById("myDropdown").classList.toggle("show");
        //     }}/>
        //     <div id={'myDropdown'} className="dropdown-content">
        //         <a href="">THMTH</a>
        //         <a href="">THMTH</a>
        //         <a href="">THMTH</a>
        //     </div>
        // </div>
    );
}

export default DropMenu;