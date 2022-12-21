import React, {useState} from "react";
import "./FilmsDropdownStyle.css"
import ActionList from "../../modal-button/ActionList";
import Button from "../../button/Button";
import PropTypes from "prop-types";

function DropDown({film}) {


    let [isModalOpen, setIsModalOpen] = useState(false);

    function
    toggleModalAction() {
        setIsModalOpen(!isModalOpen)
    }


    return (
        <div className="films-dropdown" id={film.id}>
            <Button className="dropdown__button" type="button" onClick={toggleModalAction}>
                <img src="/images/circle-button.png" alt="U"/>
            </Button>
            <ActionList isModalOpen={isModalOpen} film={film} onClose={toggleModalAction}/>
        </div>
    )
}

DropDown.propTypes = {
    film: PropTypes.object
}
export default DropDown;