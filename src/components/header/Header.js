import React, {useState} from 'react';
import "./Header.css";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import FilmsModal from "../modal-films/FilmsModal";
import addInputProps from "./add-components.json"

function Header(props) {

    let [isModalOpen, setIsModalOpen] = useState(false);


    function toggleModal() {
        setIsModalOpen(!isModalOpen);
    }


    return (
        <div className="header">
            <Logo/>
            {props.showButton &&
                <Button onClick={toggleModal} className='header__button-add' role="button">
                    + ADD MOVIE
                </Button>}
            {isModalOpen &&
                <FilmsModal title={"ADD MOVIE"} className={"modal"} input={addInputProps}
                            onClose={toggleModal}/>}
        </div>
    );
}

export default Header; 