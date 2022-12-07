import React, { useRef } from "react";
import './Search.css'



function Search() {
    const [searchValue, setSearchValue] = '';

    const handleSearchRequest = (e) => {
        setSearchValue(e.target.name);
    };
    const handleClick = (e)=>{
        console.log(searchValue)
    }
    return (
            <div className="search-form">
                <label className="label">
                    <span className="label__span"> <h1>FIND YOUR MOVIE </h1></span>
                    <div className="search-elem">
                    <input name="" type="text" className="input" placeholder="What do you want to watch" onChange={handleSearchRequest} />
                    <button name="search" type="button" className="button" onClick={handleClick}>SEARCH</button>
                    </div>
                </label>
            </div>
    );
}
export default Search;