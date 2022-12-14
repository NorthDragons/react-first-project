import React from "react";
import "./FilmsDropdownStyle.css"
import FilmsModal from "../../../modal-films/FilmsModal";
import addInputProps from "../../../header/add-components.json";
import Button from "../../../button/Button";
import ActionList from "../../../modal-button/ActionList";
import actionList from "../../../modal-button/ActionList";

class DropDown extends React.Component {
    state = {
        isModalOpen: false,
    }

    toggleModalAction = () => {
        this.setState(state => ({isModalOpen: !state.isModalOpen}))
    }


    render() {
        return (
            <div className="films-dropdown" id={'films-dropdown'}>
                <button
                    className="dropdown__button" type="button" onClick={this.toggleModalAction}><img
                    src="/images/circle-button.png" alt="U"/>
                </button>
                {this.state.isModalOpen && <ActionList onClose={this.toggleModalAction}/>}
            </div>
        )
    }
}

export default DropDown;