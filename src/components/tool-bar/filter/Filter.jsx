import React from "react";
import './Filter.css'
import Button from "../../button/Button";
import {useDispatch, useSelector} from "react-redux";
import {getMoviesAction, setFilterAction} from "../../../store/reducers/MovieReducer";
import {getAllMovie} from "../../../store/asyncActions/MoviesActionAsync";

function Filter() {
    const filterGenre = useSelector(state => state.filter)
    const dispatch = useDispatch();
    const setFilter = (e) => {
        getAllMovie(e).then(response => response.json()).then(films => {
            dispatch(getMoviesAction(films));
        });
        dispatch(setFilterAction(e))
    }


    return (
        <div className="filter">
            <ul className="filter__button-group">
                <li>
                    <Button active={filterGenre.includes("all")}
                            onClick={() => {
                                setFilter(["all"])
                            }}>ALL</Button>
                </li>
                <li>
                    <Button onClick={() => {
                        setFilter(["Documentary"])
                    }} active={filterGenre.includes("Documentary")}>DOCUMENTARY</Button>
                </li>
                <li>
                    <Button onClick={() => {
                        setFilter(["Comedy"])
                    }} active={filterGenre.includes("Comedy")}>COMEDY</Button>
                </li>
                <li>
                    <Button onClick={() => {
                        setFilter(["Horror"])
                    }} active={filterGenre.includes("Horror")}>HORROR</Button>
                </li>
                <li>
                    <Button onClick={() => {
                        setFilter(["Crime"])
                    }} active={filterGenre.includes("Crime")}>CRIME</Button>
                </li>
            </ul>
        </div>
    );
}

export default Filter;