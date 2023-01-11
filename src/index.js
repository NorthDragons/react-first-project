import React from 'react';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {store} from "./store/MovieStore";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/*"} element={<App/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();