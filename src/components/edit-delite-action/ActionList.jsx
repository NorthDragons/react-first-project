import "./ActionListStyle.css"
import React, {useState} from "react";
import Button from "../button/Button";
import FilmsModal from "../modal-films/FilmsModal";
import Genre from "../modal-films/genre-dropdown/Genre";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {deleteMovieAction, updateMovieAction} from "../../store/reducers/MovieReducer";
import {deleteMovie, updateMovie} from "../../store/asyncActions/MoviesActionAsync";


function ActionList({onClose, isModalOpen, film}) {
    let [movieForUpdate, setMovieForUpdate] = useState(film);

    let [isModalEdit, setIsModalEdit] = useState(false);
    let [isModalDelete, setIsModalDelete] = useState(false);
    const dispatch = useDispatch();

    function openEditModal() {
        setIsModalEdit(true)
        onClose();
    }

    function closeEditModal() {
        setIsModalEdit(false)
    }

    function openDeleteModal() {
        setIsModalDelete(true)
        onClose();
    }

    function closeDeleteModal() {
        setIsModalDelete(false)
    }

    const editMovie = () => {
        closeEditModal()
        updateMovie(movieForUpdate)
            .then(response => response.json())
            .then((movie) => {
                dispatch(updateMovieAction(movie))
            })
    }

    const removeMovie = (id) => {
        const delId = id;
        closeDeleteModal()
        deleteMovie(delId)
            .then(() => {
                dispatch(deleteMovieAction(delId))
            })
    }

    return (
        <>
            {movieForUpdate.title !== film.title && setMovieForUpdate(film)}
            {isModalOpen &&
                <div className={"action-list"}>
                    <Button onClick={onClose} className='action-list__close-button'
                            role="button"><span>X</span></Button>
                    <Button onClick={openEditModal} className='action-list__button'>
                        Edit
                    </Button>
                    <Button onClick={openDeleteModal} className='action-list__button'>
                        Delete
                    </Button>
                </div>
            }
            {isModalEdit &&
                <FilmsModal onClick={() => editMovie(movieForUpdate)} title={"EDIT MOVIE"} className={'modal'}
                            action={"SUBMIT"} filmId={film.id}
                            onClose={closeEditModal}>
                    <div className={'component'}>
                        <p className='component__title'>MOVIE ID</p>
                        <p className={"component__p-id"}>{film.id}</p>
                    </div>
                    <div className="component">
                        <p className='component__title'>TITLE</p>
                        <input name={"title"} type={"text"} className="component__input"
                               onChange={(e) => {
                                   setMovieForUpdate({...movieForUpdate, title: e.target.value})
                                   film = Object.assign({}, film.title = e.target.value)
                               }}
                               placeholder={"Title here"}
                               value={movieForUpdate.title}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>RELEASE DATE</p>
                        <input id={"date"}
                               value={movieForUpdate.releaseDate}
                               type="text"
                               placeholder={"Select Date"} className="component__input"
                               onFocus={(e) => (e.target.type = "date")}
                               onBlur={(e) => (e.target.type = "text")}
                               onChange={(e) => {
                               }}
                        />
                    </div>
                    <div className="component">
                        <p className='component__title'>MOVIE URL</p>
                        <input name="url" type="text" className="component__input"
                               onChange={(e) => {
                               }}
                               placeholder={"Movie URL here"}
                               value={movieForUpdate.posterPath}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>GENRE</p>
                        <Genre onChange={(e) => {

                        }}
                               genres={movieForUpdate.genres}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>OVERVIEW</p>
                        <input name={"overview"} type={"text"} className="component__input"
                               onChange={(e) => {
                               }}
                               placeholder={"Overview here"}
                               value={movieForUpdate.overview}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>RUNTIME</p>
                        <input name={"runtime"} type={"text"} className="component__input"
                               onChange={(e) => {
                               }}
                               placeholder={"Runtime here"}
                               value={movieForUpdate.runtime}/>
                    </div>
                </FilmsModal>}
            {isModalDelete &&
                <FilmsModal onClick={() => removeMovie(film.id)} action={"SUBMIT"} title={"DELETE MOVIE"}
                            className={'modal-small'} hideReset={true}
                            onClose={closeDeleteModal}>
                    <p className={'modal-del__p-del'}>Are you sure you want to delete this movie?</p>
                </FilmsModal>}
        </>
    )
}

ActionList.propTypes = {
    film: PropTypes.object,
    onClose: PropTypes.func,
    isModalOpen: PropTypes.bool
}
export default ActionList;