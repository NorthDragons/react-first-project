import React, {useState} from 'react';
import "./Header.css";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import FilmsModal from "../modal-films/FilmsModal";
import Genre from "../modal-films/genre-dropdown/Genre";

function Header(props, {film}) {

    let [isModalOpen, setIsModalOpen] = useState(false);


    function toggleModal() {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div className="header">
            <Logo/>
            {props.showButton &&
                <Button onClick={toggleModal} className='header__button-add'>
                    + ADD MOVIE
                </Button>}
            {isModalOpen &&
                <FilmsModal action={"SAVE"} title={"ADD MOVIE"} className={"modal"} onClose={toggleModal}>
                    <div className="component">
                        <p className='component__title'>TITLE</p>
                        <input name={"title"} type={"text"} className="component__input"
                               placeholder={"Title here"}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>RELEASE DATE</p>
                        <input id={"date"} type="text" onChange={(e) => console.log(e.target.value)}
                               placeholder={"Select Date"} className="component__input"
                               onFocus={(e) => (e.target.type = "date")}
                               onBlur={(e) => (e.target.type = "text")}
                        />
                    </div>
                    <div className="component">
                        <p className='component__title'>MOVIE URL</p>
                        <input name="url" type="text" className="component__input"
                               placeholder={"Movie URL here"}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>GENRE</p>
                        <Genre/>
                    </div>
                    <div className="component">
                        <p className='component__title'>OVERVIEW</p>
                        <input name={"overview"} type={"text"} className="component__input"
                               placeholder={"Overview here"}/>
                    </div>
                    <div className="component">
                        <p className='component__title'>RUNTIME</p>
                        <input name={"runtime"} type={"text"} className="component__input"
                               placeholder={"Runtime here"}/>
                    </div>
                </FilmsModal>}
        </div>
    );
}

export default Header; 