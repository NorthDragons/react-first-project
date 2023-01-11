import React from "react";
import './Content.css'
import CardBox from "../card-box/CardBox"
import ToolBar from "../tool-bar/ToolBar"

function Content() {
    return (
        <div className="content">
            <ToolBar/>
            <CardBox/>
        </div>
    );
}

export default Content;