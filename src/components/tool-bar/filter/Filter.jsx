import React, {useState} from "react";
import './Filter.css'
import Button from "../../button/Button";

function Filter() {
    let [genres, setGenres] = useState({
        all: true,
    })
    return (
        <div className="filter">
            <ul className="filter__button-group">
                <li>
                    <Button active={genres.all}
                            onClick={(e) => {
                                setGenres({all: true})
                            }}>ALL</Button>
                </li>
                <li>
                    <Button onClick={(e) => {
                        setGenres({documentary: true})
                    }} active={genres.documentary}>DOCUMENTARY</Button>
                </li>
                <li>
                    <Button onClick={(e) => {
                        setGenres({comedy: true})
                    }} active={genres.comedy}>COMEDY</Button>
                </li>
                <li>
                    <Button onClick={(e) => {
                        setGenres({horror: true})
                    }} active={genres.horror}>HORROR</Button>
                </li>
                <li>
                    <Button onClick={(e) => {
                        setGenres({crime: true})
                    }}  active={genres.crime}>CRIME</Button>
                </li>
            </ul>
        </div>
    );
}

export default Filter;