import React from "react";
import './Main.css'
import logo404 from '../../../images/not-found.png'

function Main() {
    return (
            <div className="main">
                <h1 id="not-found" className="text">Page Not Found</h1>
                <img alt="404 not found" src={logo404} />
                <button role="button">
                    Go Back To Home
                </button>
            </div>
    );
}

export default Main;