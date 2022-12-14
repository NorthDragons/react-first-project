import React from "react";
import "./FilmsDropdownStyle.css"
import FilmsModal from "../../../modal-films/FilmsModal";
import addInputProps from "../../../header/add-components.json";
import Button from "../../../button/Button";
import ActionList from "../../../modal-button/ActionList";
import actionList from "../../../modal-button/ActionList";

class DropDown extends React.Component {
    state = {
        actionList: true
    }
    toggleActionList = () => {
        this.setState(state => ({actionList: !this.state.actionList}))
    }

    render() {
        return (
            <div className="films-dropdown" id={'films-dropdown'}>
                <button
                    className="dropdown__button" type="button" onClick={this.toggleActionList}><img
                    src="/images/circle-button.png" alt="U"/>
                </button>
                {actionList && <ActionList onClose={this.toggleActionList}/>}
            </div>
        )
    }
}

export default DropDown;