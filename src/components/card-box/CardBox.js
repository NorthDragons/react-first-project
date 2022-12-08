import React from "react";
import Card from "../card/Card";
import "./CardBox.css"
import filmsJson from "./films.json"

function CardBox() {
    // const parse = JSON.parse(filmsJson);
    return (
        <div className="card-box">
            {filmsJson.map(film =>{
                return <Card film={film}/>
            })}
        </div>
    );
}

export default CardBox;