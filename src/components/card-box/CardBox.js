import React, {useState} from "react";
import Card from "./card/Card";
import "./CardBox.css"
import filmsJson from "./films.json";

function CardBox() {
    let filmsMock = filmsJson;

    return (
        <div className="card-box">
            {filmsMock.length > 0 && <h3 className="card-box__h3">{filmsMock.length}  Movies found </h3>}
            {filmsMock.length > 0 && filmsMock.map(film => {
                return <Card films={film}/>
            })}
            {filmsMock.length <= 0 && <h1 className="card-box__h1">No Movie Found</h1>}
        </div>
    );
}

export default CardBox;
