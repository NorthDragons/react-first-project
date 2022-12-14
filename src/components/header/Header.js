import React from 'react';
import "./Header.css";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import FilmsModal from "../modal-films/FilmsModal";
import addInputProps from "./add-components.json"

class Header extends React.Component {
    state = {
        isModalOpen: false,
    }

    toggleModal = () => {
        this.setState(state => ({isModalOpen: !state.isModalOpen}))
    }

    render() {
        return (
            <div className="header">
                <Logo/>
                {this.props.showButton &&
                    <Button onClick={this.toggleModal} className='header__button-add' role="button">
                        + ADD MOVIE
                    </Button>}
                {this.state.isModalOpen &&
                    <FilmsModal title={"ADD MOVIE"} input={addInputProps} onClose={this.toggleModal}/>}
            </div>
        );
    }
}

export default Header; 