import React from "react";
import Card from "../card/Card";
import "./CardBox.css"
import filmsJson from "./films.json"

function CardBox() {
    const films = filmsJson;
    return (
        <div className="card-box">
            {films.length > 0 && <h3 className="card-box__h3">{films.length} - Фильмов найдено </h3>}
            {films.length > 0 && films.map(film => {
                return <Card film={film}/>
            })}
            {films.length <= 0 && <h1 className="card-box__h1">No Movie Found</h1>}
        </div>
    );
}

export default CardBox;