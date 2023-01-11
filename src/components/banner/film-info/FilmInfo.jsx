import Header from "../../header/Header";
import Button from "../../button/Button";
import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {getMovieById} from "../../../store/asyncActions/MoviesActionAsync";
import {useDispatch, useSelector} from "react-redux";
import {showInfoAction} from "../../../store/reducers/MovieReducer";


export const FilmInfo = () => {
    let {id} = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        getMovieById(id.toString()).then((film) => dispatch(showInfoAction(film)))

    }, [])
    const film = useSelector(state => state.film)
    return (
        <div className="banner">

            <div className={"film-info"}>

                <Header/>
                <div className={"info-card"}>
                    <Link to={"/"}>
                        <Button className={"info-card__search-button"}>
                            <img src={"/images/search-icon.png"} alt={"search"}/>
                        </Button>
                    </Link>
                    <img className={"info-card__img"} src={film.posterPath} alt={"photo"}/>
                    <div className={"info"}>
                        <h1 className={"title__h1"}>{film.title}<span>{film.voteAverage ? film.voteAverage : 0}</span>
                        </h1>
                        <p className={"title__p"}>{film.releaseDate}<span>{film.runtime} min</span></p>
                        <p className={"title__p-overview"}>{film.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}