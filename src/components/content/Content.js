import React from "react";
import './Content.css'
import Filter from "../filter/Filter.js";
import DropMenu from "../drop-menu/DropMenu";
import CardBox from "../card-box/CardBox"


function Content() {
    return (
        <div className="content">
            <div className="tool-bar">
                <Filter />
                <DropMenu/>
            </div>
            <div className="films">
            <CardBox/>
            </div>
        </div>
    );
}

export default Content;