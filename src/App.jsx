import React, {useEffect} from 'react';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
import Content from "./components/content/Content";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary.js"
import {getAllMovie} from "./store/asyncActions/MoviesAction";
import {getMoviesAction} from "./store/reducers/MovieReducer";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        getAllMovie().then(payload => {
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
