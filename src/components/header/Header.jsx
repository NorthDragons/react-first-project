import React, {useState} from 'react';
import "./Header.css";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import FilmsModal from "../modal-films/FilmsModal";
import Genre from "../modal-films/genre-dropdown/Genre";
import PropTypes from "prop-types";
import {addMovieAction} from "../../store/reducers/MovieReducer";
import {useDispatch} from "react-redux";
import {addMovie} from "../../store/asyncActions/Movies";

function Header({showButton}) {

    let [isModalOpen, setIsModalOpen] = useState(false);
    let [movie, setMovie] = useState({})
    const dispatch = useDispatch();


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);

    }
    const putValue = (e) => {
        switch (e.target.name) {
            case "title":
                setMovie({...movie, title: e.target.value})
                return;
            case "date":
                setMovie({...movie, releaseDate: e.target.value})
                return;
            case "movieUrl":
                setMovie({...movie, posterPath: e.target.value})
                return;
            case "genre":
                setMovie({...movie, genres: e.target.value})
                return;
            case "overview":
                setMovie({...movie, overview: e.target.value})
                return;
            case "runtime":
                setMovie({...movie, runtime: e.target.value})
                return;
            default:
                movie = {}
                return;
        }
    }
    const saveMovie = (movie) => {
        toggleModal()
        const promise = addMovie(movie);
        promise.then((json) => dispatch(addMovieAction(movie)))
    }

    return (
        <div className="header">
            <Logo/>
            {showButton &&
                <Button onClick={toggleModal} className='header__button-add'>
                    + ADD MOVIE
                </Button>}
            {isModalOpen &&
                <FilmsModal onSave={() => saveMovie(movie)} action={"SAVE"} title={"ADD MOVIE"} className={"modal"}
                            onClose={toggleModal}>
                    <div className="component">
                        <p className='component__title'>TITLE</p>
                        <input name={"title"} type={"text"} className="component__input" onChange={(e) => putValue(e)}
                               placeholder={"Title here"}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>RELEASE DATE</p>
                        <input name={"date"} type="text" onChange={(e) => putValue(e)}
                               placeholder={"Select Date"} className="component__input"
                               onFocus={(e) => (e.target.type = "date")}
                               onBlur={(e) => (e.target.type = "text")}
                        />
                    </div>
                    <div className="component">
                        <p className='component__title'>MOVIE URL</p>
                        <input name="movieUrl" type="text" className="component__input" onChange={(e) => putValue(e)}
                               placeholder={"Movie URL here"}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>GENRE</p>
                        <Genre onChange={(e) => putValue(e)}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>OVERVIEW</p>
                        <input name={"overview"} type={"text"} className="component__input"
                               onChange={(e) => putValue(e)}
                               placeholder={"Overview here"}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>RUNTIME</p>
                        <input name={"runtime"} type={"text"} className="component__input" onChange={(e) => putValue(e)}
                               placeholder={"Runtime here"}/>
                    </div>
                </FilmsModal>}
        </div>
    );
}

Header.propTypes = {
    showButton: PropTypes.bool
}

export default Header; 