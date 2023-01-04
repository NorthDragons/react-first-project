import React from "react";
import Header from "../header/Header";
import SearchForm from "../search-block/SearchForm"
import './Banner.css'
import Button from "../button/Button";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {hideInfoAction} from "../../store/reducers/MovieReducer";

function Banner() {
    const film = useSelector(action => action.film);
    const dispatch = useDispatch();

    const hideInfo = () => {
        console.log("hide info")
        dispatch(hideInfoAction())
    }
    return (
        <div className="banner">
            {film ?
                <div className={"film-info"}>
                    <Header/>
                    <div className={"info-card"}>
                        <Button className={"info-card__search-button"} onClick={() => hideInfo()}>
                            <img src={"/images/search-icon.png"} alt={"search"}/>
                        </Button>
                        <img className={"info-card__img"} src={film.posterPath} alt={"photo"}/>
                        <div className={"info"}>
                            <h1 className={"title__h1"}>{film.title}<span>{film.voteAverage}</span></h1>
                            <p className={"title__p"}>{film.releaseDate}<span>{film.runtime} min</span></p>
                            <p className={"title__p-overview"}>{film.overview}</p>
                        </div>
                    </div>
                </div> :
                <Header showButton={true}/>
            }
            <SearchForm/>
        </div>
    );
}

Banner.propTypes = {
    film: PropTypes.shape(
        {
            title: PropTypes.string,
        }),
    onClose: PropTypes.func
}


export default Banner;