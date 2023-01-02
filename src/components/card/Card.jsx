import React from "react";
import './Card.css'
import PropTypes from "prop-types";
import FilmsDropdown from "./dropdown/FilmsDropdown";
import {useDispatch} from "react-redux";

function Card({film, onClick}) {
    const dispatch = useDispatch();

    const showInfo = (film) => {
        dispatch({type: "SHOW_INFO", film: film})
    }

    return (
        <div className={"card-border"}>
            <FilmsDropdown film={film}/>
            <div className="card" onClick={() => showInfo(film)}>
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