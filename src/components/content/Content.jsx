import React from "react";
import './Content.css'
import CardBox from "../card-box/CardBox"
import ToolBar from "../tool-bar/ToolBar"
import PropTypes from "prop-types";

function Content({films},{onClick}) {
    return (
        <div className="content">
            <ToolBar/>
            <CardBox films={films} onClick={onClick}/>
        </div>
    );
}

Content.propTypes={
    films: PropTypes.array,
    onClick: PropTypes.func
}
export default Content;