import React, {useState} from "react";
import Card from "../card/Card";
import "./CardBox.css"
import filmsJson from "./films.json";
// export function searchFilms(searchValue) {
//     searchFilms1(searchValue);
// }

function CardBox() {
    let filmsMock = filmsJson;

    // function searchFilms1(searchValue) {
    //     console.log("starts")
    //     const result = filmsJson.filter(function (film) {
    //         return film.title.includes(searchValue);
    //     });
    //     setValue(result);
    //     // filmsMock = result
    //     console.log(filmsMock)
    // }

    return (
        <div className="card-box">
            {filmsMock.length > 0 && <h3 className="card-box__h3">{filmsMock.length}  Movies found </h3>}
            {filmsMock.length > 0 && filmsMock.map(films => {
                return <Card films={films}/>
            })}
            {filmsMock.length <= 0 && <h1 className="card-box__h1">No Movie Found</h1>}
        </div>
    );
}

export default CardBox;
