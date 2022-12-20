import React from "react";
import './Content.css'
import Filter from "../filter/Filter.js";
import DropMenu from "../drop-menu/DropMenu";
import CardBox from "../card-box/CardBox"
import ToolBar from "../tool-bar/ToolBar"

function Content(props) {
    return (
        <div className="content">
            <ToolBar/>
            <CardBox/>
        </div>
    );
}

export default Content;