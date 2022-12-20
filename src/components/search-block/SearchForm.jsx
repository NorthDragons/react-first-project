import React, {useState} from "react";
import './Search.css'
import Button from "../button/Button";
import CardBox, {searchFilms} from "../card-box/CardBox";


function Search() {
    const [searchValue, setSearchValue] = useState('')

    function handleSearchRequest(e) {
        setSearchValue(e.target.value);
        console.log(searchValue);
    }

    return (
        <div className="search-form">
            <div className="label"><h1>FIND YOUR MOVIE </h1></div>
            <div className="search-elem">
                <input name="search" type="text" className="search-elem__input"
                       placeholder="What do you want to watch"
                       onChange={handleSearchRequest}/>
                <Button children="SEARCH" type="button" className="button"
                        onClick={() => console.log('search')}/>
            </div>
        </div>
    );
}

export default Search;