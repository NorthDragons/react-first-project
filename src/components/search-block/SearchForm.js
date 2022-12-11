import React, {useState} from "react";
import './Search.css'
import Button from "../button/Button";


function Search() {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchRequest = (e) => {
        setSearchValue(searchValue + e.target.value);
    };
    const handleClick = () => {
        console.log(searchValue)
    }
    return (
        <div className="search-form">
            <div className="label"><h1>FIND YOUR MOVIE </h1></div>
            <div className="search-elem">
                <input name="search" type="text" className="search-elem__input" placeholder="What do you want to watch"
                       onChange={handleSearchRequest}/>
                <Button children="search" type="button" className="button" onClick={handleClick}>SEARCH</Button>
            </div>
        </div>
    );
}

export default Search;