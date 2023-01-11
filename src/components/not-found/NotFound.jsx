import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "./main/Main";
import "./NotFound.css"

function NotFound() {
    return (
        <div className={"not-found"}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default NotFound;