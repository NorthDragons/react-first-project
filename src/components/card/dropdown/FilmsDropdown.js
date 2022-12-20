import React, {useState} from "react";
import "./FilmsDropdownStyle.css"
import ActionList from "../../modal-button/ActionList";
import Button from "../../button/Button";

function DropDown(props) {


    let [isModalOpen, setIsModalOpen] = useState(false);

    function
    toggleModalAction() {
        setIsModalOpen(!isModalOpen)
    }


    return (
        <div className="films-dropdown" id={props.film.id}>
            <Button className="dropdown__button" type="button" onClick={toggleModalAction}>
                <img src="/images/circle-button.png" alt="U"/>
            </Button>
            <ActionList isModalOpen={isModalOpen} film={props.film} onClose={toggleModalAction}/>
        </div>
    )
}

export default DropDown;