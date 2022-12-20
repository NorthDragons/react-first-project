import React from "react";
import './Card.css'
import PropTypes from "prop-types";
import FilmsDropdown from "./dropdown/FilmsDropdown";

function Card(props) {

    return (
        <div className={"card-border"}>
            <FilmsDropdown film={props.film}/>
            <div className="card" onClick={() => props.onClick(props.film)}>
                <img src={props.film.image} className="card__img" alt={"some photo"}/>
                <div className='film-title'>
                    <h2 className="film-title__h2-name">{props.film.title}</h2>
                    <p className="film-title__p-year">{props.film.date}</p>
                </div>
                <div className='genre'><p className="film-title__p-genre">{props.film.genre}</p></div>
            </div>
        </div>
    )
        ;
}

Card.propTypes = {
    film: PropTypes.object
};


export default Card;