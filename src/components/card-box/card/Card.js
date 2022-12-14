import React from "react";
import './Card.css'
import PropTypes from "prop-types";
import FilmsDropdown from "./dropdown/FilmsDropdown";

function Card(props) {

    return (
        <div className="card">
            <FilmsDropdown filmId={Math.ceil(Math.random() * 100)}/>
            <img src={props.films.image} alt="photo" className="card__img"/>
            <div className='film-title'>
                <h2 className="film-title__h2-name">{props.films.title}</h2>
                <p className="film-title__p-year">{props.films.year}</p>
            </div>
            <div className='genre'><p className="film-title__p-genre">{props.films.genre}</p></div>
        </div>
    );
}

Card.propTypes = {
    film: PropTypes.object
};


export default Card;