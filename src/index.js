import React from 'react';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App/>
        {/*<div id='portal'></div>*/}
    </React.StrictMode>
)
;

reportWebVitals();