import React, {useState} from "react";
import './Filter.css'
import Button from "../../button/Button";

function Filter() {
    let [genres, setGenres] = useState({
        all: true,
        documentary: false,
        comedy: false,
        horror: false,
        crime: false,
    })

    return (
        <div className="filter">
            <ul className="filter__button-group">
                <li>
                    <Button active={genres.all}
                            onClick={(props) => props.target.active = !props.target.active}>ALL</Button>
                </li>
                <li>
                    <Button active={genres.documentary}>DOCUMENTARY</Button>
                </li>
                <li>
                    <Button active={genres.comedy}>COMEDY</Button>
                </li>
                <li>
                    <Button active={genres.horror}>HORROR</Button>
                </li>
                <li>
                    <Button active={genres.crime}>CRIME</Button>
                </li>
            </ul>
        </div>
    );
}

export default Filter;