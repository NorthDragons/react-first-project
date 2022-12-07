import React from "react";
import './Content.css'
import Filter from "../film-filter/Filter";
import DropMenu from "../drop-menu/DropMenu";
function Content() {
    return (
        <div className="content">
            <div className="tool-bar">
                <Filter />
                <DropMenu/>
            </div>
            <div className="films">

            </div>
        </div>
    );
}

export default Content;