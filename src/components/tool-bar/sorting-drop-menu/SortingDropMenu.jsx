import React from "react";
import './DropMenu.css';
import {useDispatch} from "react-redux";
import {sortMoviesAction} from "../../../store/reducers/MovieReducer";

function SortingDropMenu() {
    const dispatch = useDispatch();

    const sortMovies = (e) => {
        dispatch(sortMoviesAction(e.target.value))
    }

    return (
        <div className="sort-dropdown">
            <span className="sort-dropdown__span"> SORT BY</span>
            <select className="sort-dropdown__select" onChange={(e) => sortMovies(e)}>
                <option onClick={(e) => sortMovies(e)} value={"title"}>TITLE (A-Z)</option>
                <option value={"releaseDate"}>RELEASE DATE</option>
            </select>
        </div>
    )
}

export default SortingDropMenu;