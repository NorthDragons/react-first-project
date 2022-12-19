import React from "react";
import "./FilmsDropdownStyle.css"
import ActionList from "../../modal-button/ActionList";

class DropDown extends React.Component {


    state = {
        isModalOpen: false,
    }

    toggleModalAction = () => {
        this.setState(state => ({isModalOpen: !state.isModalOpen}))
    }


    render() {
        return (
            <div className="films-dropdown" id={this.props.id}>
                <button
                    className="dropdown__button" type="button" onClick={this.toggleModalAction}><img
                    src="/images/circle-button.png" alt="U"/>
                </button>
                {this.state.isModalOpen && <ActionList id={this.props.id} onClose={this.toggleModalAction}/>}
            </div>
        )
    }
}

export default DropDown;