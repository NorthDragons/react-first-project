import React from "react";
import './Content.css'
import CardBox from "../card-box/CardBox"
import ToolBar from "../tool-bar/ToolBar"

function Content(props) {
    return (
        <div className="content">
            <ToolBar/>
            <CardBox onClick={props.onClick}/>
        </div>
    );
}

export default Content;