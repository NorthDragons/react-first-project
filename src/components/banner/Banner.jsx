import React from "react";
import Header from "../header/Header";
import SearchForm from "../search-block/SearchForm"
import './Banner.css'
import Button from "../button/Button";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";

function Banner({onClose}) {
    const film = useSelector(state => state.film);
    const dispatch = useDispatch();

    const hideInfo = () => {
        console.log("hide info")
        dispatch({type: "HIDE_INFO"})
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
                        <img className={"info-card__img"} src={film.image} alt={"photo"}/>
                        <div className={"info"}>
                            <h1 className={"title__h1"}>{film.title}<span>{film.rate}</span></h1>
                            <p className={"title__p"}>{film.date}<span>{film.runtime}</span></p>
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