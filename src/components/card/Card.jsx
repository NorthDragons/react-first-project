import React from "react";
import './Card.css'
import PropTypes from "prop-types";
import FilmsDropdown from "./dropdown/FilmsDropdown";
import {useDispatch} from "react-redux";
import {showInfoAction} from "../../store/reducers/MovieReducer";
import {Link} from "react-router-dom";

function Card({film, onClick}) {
    const dispatch = useDispatch();

    const showInfo = (payload) => {
        dispatch(showInfoAction(payload))
    }

    return (
        <div className={"card-border"}>
            <FilmsDropdown film={film}/>
            <Link to={"/film/" + film.id}>
                <div className="card">
                    <img src={film.posterPath} className="card__img" alt={"some photo"}/>
                    <div className='film-title'>
                        <h2 className="film-title__h2-name">{film.title}</h2>
                        <p className="film-title__p-year">{film.releaseDate}</p>
                    </div>
                    <div className='genre'><p className="film-title__p-genre">{film.genres.join(", ")}</p></div>
                </div>
            </Link>
        </div>
    );
}

Card.propTypes = {
    film: PropTypes.object,
}


export default Card;