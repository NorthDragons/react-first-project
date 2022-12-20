import React from "react";
import './Main.css'
import logo404 from '../../../../public/images/not-found.png'
import Button from "../../button/Button";

function Main() {
    return (
        <div className="main">
            <h1 id="not-found" className="text">Page Not Found</h1>
            <img alt="404 not found" src={logo404}/>
            <Button children={'Go Back To Home'}/>
        </div>
    );
}

export default Main;