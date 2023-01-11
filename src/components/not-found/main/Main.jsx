import React from "react";
import './Main.css'
import Button from "../../button/Button";
import {Link} from "react-router-dom";

function Main() {
    return (
        <div className="main">
            <h1 id="not-found" className="text">Page Not Found</h1>
            <img alt="404 not found" src={"/images/not-found.png"}/>
            <Link to={"/"}>
                <Button className={"button-notfound"} children={'Go Back To Home'}/>
            </Link>
        </div>
    );
}

export default Main;