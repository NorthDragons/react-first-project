import React from "react";
import Header from "../header/Header";
import SearchForm from "../search-block/SearchForm"
import './Banner.css'
import {Route, Routes} from 'react-router-dom';
import {FilmInfo} from "./film-info/FilmInfo";

function Banner() {
    return (
        <div className="banner">
            <Routes>
                <Route path={'/film/:id'} element={<FilmInfo/>}/>
            </Routes>
            <Header showButton={true}/>
            <SearchForm/>
        </div>
    );
}

export default Banner;