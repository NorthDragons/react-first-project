import React from "react";
import './Card.css'
import PropTypes from "prop-types";
import FilmsDropdown from "./dropdown/FilmsDropdown";

function Card({film},{onClick}) {

    return (
        <div className={"card-border"}>
            <FilmsDropdown film={film}/>
            <div className="card" onClick={() => onClick(film)}>
                <img src={film.image} className="card__img" alt={"some photo"}/>
                <div className='film-title'>
                    <h2 className="film-title__h2-name">{film.title}</h2>
                    <p className="film-title__p-year">{film.date}</p>
                </div>
                <div className='genre'><p className="film-title__p-genre">{film.genre}</p></div>
            </div>
        </div>
    );
}

Card.propTypes = {
    film: PropTypes.object,
    onClick: PropTypes.func
};


export default Card;