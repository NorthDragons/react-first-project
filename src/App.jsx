import React, {useEffect} from 'react';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
import Content from "./components/content/Content";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary.js"
import {getMoviesAction} from "./store/reducers/MovieReducer";
import {useDispatch, useSelector} from "react-redux";
import {getAllMovie} from "./store/asyncActions/MoviesActionAsync";

function App() {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter)


    useEffect(() => {
        getAllMovie(filter[0]).then(response => response.json()).then(films => {
            dispatch(getMoviesAction(films));
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
