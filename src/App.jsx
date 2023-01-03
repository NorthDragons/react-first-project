import React, {useEffect, useState} from 'react';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
import Content from "./components/content/Content";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary.js"
import filmsJson from "./components/films.json"
import {getResponse} from "./store/asyncActions/Movies";
import {getMoviesAction} from "./store/reducers/MovieReducer";

function App() {

    useEffect(() => {
        getResponse().then(movies => {
            console.log(movies);
            getMoviesAction("GET_MOVIES", movies)
        }, [])
    })

    return (
        <ErrorBoundary>
            <React.Fragment>
                <Banner/>
                <Content/>
                <Footer/>
            </React.Fragment>
        </ErrorBoundary>
    );
}

export default App;
