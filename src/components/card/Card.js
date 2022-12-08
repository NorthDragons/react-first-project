import React from "react";
import './Card.css'
import PropTypes from "prop-types";

function Card(props) {
    return (
        <div className="card">
            <img src={props.film.image} alt="photo" className="card__img"/>
            <div className='film-title'>
                <h2 className="film-title__h2-name">{props.film.title}</h2>
                <p className="film-title__p-year">{props.film.year}</p>
                <p className="film-title__p-genre">{props.film.genre}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    film: PropTypes.object
};


export default Card;