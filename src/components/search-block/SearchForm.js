import React, {useState} from "react";
import './Search.css'
import Button from "../button/Button";


function Search() {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchRequest = (e) => {
        setSearchValue(searchValue + e.target.name);
    };
    const handleClick = (e) => {
        console.log(searchValue)
    }
    return (
        <div className="search-form">
            <label className="label">
                <span className="label__span"> <h1>FIND YOUR MOVIE </h1></span>
                <div className="search-elem">
                    <input name="" type="text" className="search-elem__input" placeholder="What do you want to watch"
                           onChange={handleSearchRequest}/>
                    <Button children="search" type="button" className="button" onClick={handleClick}>SEARCH</Button>
                </div>
            </label>
        </div>
    );
}

export default Search;