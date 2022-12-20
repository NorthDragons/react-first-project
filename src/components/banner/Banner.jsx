import React from "react";
import Header from "../header/Header";
import SearchForm from "../search-block/SearchForm"
import './Banner.css'
import Button from "../button/Button";

function Banner(props) {
    return (
        <div className="banner">
            {props.film &&
                <div className={"film-info"}>
                    <Header/>
                    <div className={"info-card"}>
                        <Button className={"info-card__search-button"} onClick={props.onClose}>
                            <img src={"/images/search-icon.png"}/>
                        </Button>
                        <img className={"info-card__img"} src={props.film.image} alt={"photo"}/>
                        <div className={"info"}>
                            <h1 className={"title__h1"}>{props.film.title}<span>{props.film.rate}</span></h1>
                            <p className={"title__p"}>{props.film.date}<span>{props.film.runtime}</span></p>
                            <p className={"title__p-overview"}>{props.film.overview}</p>
                        </div>
                    </div>
                </div>
            }
            <Header showButton={true}/>
            <SearchForm/>
        </div>
    );
}

export default Banner;