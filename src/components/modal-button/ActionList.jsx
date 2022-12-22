import "./ActionListStyle.css"
import React, {useState} from "react";
import Button from "../button/Button";
import FilmsModal from "../modal-films/FilmsModal";
import Genre from "../modal-films/genre-dropdown/Genre";
import PropTypes from "prop-types";


function ActionList({onClose, isModalOpen, film}) {

    let [isModalEdit, setIsModalEdit] = useState(false);
    let [isModalDelete, setIsModalDelete] = useState(false);
    let [dateValue, setDateValue] = useState(film.date);

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

    return (
        <>
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
                <FilmsModal title={"EDIT MOVIE"} className={'modal'} action={"SUBMIT"} filmId={film.id}
                            onClose={closeEditModal}>
                    <div className={'component'}>
                        <p className='component__title'>MOVIE ID</p>
                        <p className={"component__p-id"}>{film.id}</p>
                    </div>
                    <div className="component">
                        <p className='component__title'>TITLE</p>
                        <input name={"title"} type={"text"} className="component__input"
                               placeholder={"Title here"} value={film.title}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>RELEASE DATE</p>
                        <input id={"date"} value={dateValue}
                               type="text"
                               placeholder={"Select Date"} className="component__input"
                               onFocus={(e) => (e.target.type = "date")}
                               onBlur={(e) => (e.target.type = "text")}
                               onChange={(e) => {
                                   setDateValue(e.target.value)
                               }}
                        />
                    </div>
                    <div className="component">
                        <p className='component__title'>MOVIE URL</p>
                        <input name="url" type="text" className="component__input"
                               placeholder={"Movie URL here"} value={film.url}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>GENRE</p>
                        <Genre genre={film.genre}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>OVERVIEW</p>
                        <input name={"overview"} type={"text"} className="component__input"
                               placeholder={"Overview here"} value={film.overview}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>RUNTIME</p>
                        <input name={"runtime"} type={"text"} className="component__input"
                               placeholder={"Runtime here"} value={film.runtime}/>
                    </div>
                </FilmsModal>}
            {isModalDelete &&
                <FilmsModal action={"SUBMIT"} title={"DELETE MOVIE"} className={'modal-small'} hideReset={true}
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