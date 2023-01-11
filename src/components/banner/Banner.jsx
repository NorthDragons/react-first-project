import React from "react";
import Header from "../header/Header";
import SearchForm from "../search-block/SearchForm"
import './Banner.css'

function Banner() {
    return (
        <div className="banner">
            <Header showButton={true}/>
            <SearchForm/>
        </div>
    );
}

export default Banner;