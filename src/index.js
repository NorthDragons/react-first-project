import React from 'react';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {store} from "./store/MovieStore";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./components/not-found/NotFound.jsx";
import {FilmInfo} from "./components/banner/film-info/FilmInfo";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route not exact path={"/"} element={<App/>}/>
                    <Route not exact path={"/film/:id"} element={<FilmInfo/>}/>
                    <Route path={"*"} element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();