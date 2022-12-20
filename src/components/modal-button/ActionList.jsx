import "./ActionListStyle.css"
import React, {useState} from "react";
import Button from "../button/Button";
import FilmsModal from "../modal-films/FilmsModal";
import Genre from "../modal-films/genre-dropdown/Genre";


function ActionList(props) {

    let [isModalEdit, setIsModalEdit] = useState(false);
    let [isModalDelete, setIsModalDelete] = useState(false);

    function openEditModal() {
        setIsModalEdit(true)
        props.onClose();
    }

    function closeEditModal() {
        setIsModalEdit(false)
    }

    function openDeleteModal() {
        setIsModalDelete(true)
        props.onClose();
    }

    function closeDeleteModal() {
        setIsModalDelete(false)
    }

    return (
        <>
            {props.isModalOpen &&
                <div className={"action-list"}>
                    <Button onClick={props.onClose} className='action-list__close-button'
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
                <FilmsModal title={"EDIT MOVIE"} className={'modal'} action={"SUBMIT"} filmId={props.id}
                            onClose={closeEditModal}>
                    <div className={'component'}>
                        <p className='component__title'>MOVIE ID</p>
                        <p className={"component__p-id"}>{props.film.id}</p>
                    </div>
                    <div className="component">
                        <p className='component__title'>TITLE</p>
                        <input name={"title"} type={"text"} className="component__input"
                               placeholder={"Title here"} value={props.film.title}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>RELEASE DATE</p>
                        <input id={"date"} value={props.film.date}
                               type="text" onChange={(e) => console.log(e.target.value)}
                               placeholder={"Select Date"} className="component__input"
                               onFocus={(e) => (e.target.type = "date")}
                               onBlur={(e) => (e.target.type = "text")}
                        />
                    </div>
                    <div className="component">
                        <p className='component__title'>MOVIE URL</p>
                        <input name="url" type="text" className="component__input"
                               placeholder={"Movie URL here"} value={props.film.url}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>GENRE</p>
                        <Genre genre={props.film.genre}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>OVERVIEW</p>
                        <input name={"overview"} type={"text"} className="component__input"
                               placeholder={"Overview here"} value={props.film.overview}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>RUNTIME</p>
                        <input name={"runtime"} type={"text"} className="component__input"
                               placeholder={"Runtime here"} value={props.film.runtime}/>
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

export default ActionList;