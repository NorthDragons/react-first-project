import React, {useEffect, useState} from 'react';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
import Content from "./components/content/Content";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary.js"
import {getResponse} from "./store/asyncActions/Movies";
import {getMoviesAction} from "./store/reducers/MovieReducer";
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        getResponse().then(payload => {
            console.log(payload);
            dispatch(getMoviesAction(payload));
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
