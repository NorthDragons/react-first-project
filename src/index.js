import React from 'react';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
;

reportWebVitals();