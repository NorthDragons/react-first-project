import React from "react";
import './Search.css'
function Search() {
    return (
        <React.Fragment>
            <div className="search-form">
                <input className="input" placeholder="What do you want to watch"/>
                <button className="button">SEARCH</button>
            </div>
        </React.Fragment>
    );
}
export default Search;