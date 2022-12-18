import "./ActionListStyle.css"
import React, {useState} from "react";
import Button from "../button/Button";
import ReactDOM from "react-dom";
import FilmsModal from "../modal-films/FilmsModal";
import addInputProps from "../header/add-components.json";


function ActionList(props) {

    let [isModalEdit, setIsModalEdit] = useState(false);
    let [isModalDelete, setIsModalDelete] = useState(false);

    function toggleEditModal() {
        setIsModalEdit(!isModalEdit)
    }

    function toggleDeleteModal() {
        setIsModalDelete(!isModalDelete)
    }

    return (
        ReactDOM.createPortal(
            <div className={"action-list"}>
                <Button onClick={props.onClose} className='action-list__close-button'
                        role="button"><span>X</span></Button>
                <Button onClick={toggleEditModal} className='action-list__button' role="button">
                    Edit
                </Button>
                <Button onClick={toggleDeleteModal} className='action-list__button' role="button">
                    Delete
                </Button>
                {isModalEdit &&
                    <FilmsModal title={"EDIT MOVIE"} className={'modal'} input={addInputProps} filmId={props.id}
                                onClose={toggleEditModal}/>}
                {isModalDelete &&
                    <FilmsModal title={"DELETE MOVIE"} className={'modal-del'} input={addInputProps} del={true}
                                onClose={toggleDeleteModal}/>}
            </div>
            , document.getElementById(props.id)
        )

    )
}

export default ActionList;