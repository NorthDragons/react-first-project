import React from "react";
import Header from "../header/Header";
import SearchForm from "../search-block/SearchForm"
import './Banner.css'


function Banner(props) {
    return (
        <div className="banner">
            <Header showButton={true} onClick={props.onClick}/>
            <SearchForm films={props.films} />
        </div>
    );
}
export default Banner;