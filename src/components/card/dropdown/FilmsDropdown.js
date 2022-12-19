import React, {useState} from "react";
import "./FilmsDropdownStyle.css"
import ActionList from "../../modal-button/ActionList";

function DropDown(props) {


    let [isModalOpen, setIsModalOpen] = useState(false);

    function
    toggleModalAction() {
        setIsModalOpen(!isModalOpen)
    }


    return (
        <div className="films-dropdown" id={props.id}>
            <button
                className="dropdown__button" type="button" onClick={toggleModalAction}><img
                src="/images/circle-button.png" alt="U"/>
            </button>
            {isModalOpen && <ActionList id={props.id} onClose={toggleModalAction}/>}
        </div>
    )
}

export default DropDown;