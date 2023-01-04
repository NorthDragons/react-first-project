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
                        <input name={"title"} type={"text"} className="component__input"
                               onChange={(e) => setMovie({...movie, title: e.target.value})}
                               placeholder={"Title here"}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>RELEASE DATE</p>
                        <input name={"date"} type="text"
                               onChange={(e) => setMovie({...movie, releaseDate: e.target.value})}
                               placeholder={"Select Date"} className="component__input"
                               onFocus={(e) => (e.target.type = "date")}
                               onBlur={(e) => (e.target.type = "text")}
                        />
                    </div>
                    <div className="component">
                        <p className='component__title'>MOVIE URL</p>
                        <input name="movieUrl" type="text" className="component__input"
                               onChange={(e) => setMovie({...movie, posterPath: e.target.value})}
                               placeholder={"Movie URL here"}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>GENRE</p>
                        <Genre onChange={(e) => setMovie({...movie, genres: e.target.value})}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>OVERVIEW</p>
                        <input name={"overview"} type={"text"} className="component__input"
                               onChange={(e) => setMovie({...movie, overview: e.target.value})}
                               placeholder={"Overview here"}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>RUNTIME</p>
                        <input name={"runtime"} type={"text"} className="component__input"
                               onChange={(e) => setMovie({...movie, runtime: e.target.value})}
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