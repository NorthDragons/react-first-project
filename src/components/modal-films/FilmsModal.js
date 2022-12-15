import React from "react";
import './FilmModal.css'
import ReactDOM from "react-dom";
import ButtonGroup from "./button-group/ButtonGroup";

function Modal(props) {


    if (!props.del) {
        return (
            ReactDOM.createPortal(
                <div>
                    <div className={'background'}></div>
                    <div className={'modal'}>
                        <button className='title__cansel-button' onClick={props.onClose}>X</button>
                        <div className={'title'}>
                            <h1>{props.title}</h1>
                        </div>
                        {props.filmId != null && <div className={'title'}>
                            <p className='component__title'>MOVIE ID</p>
                            <p>{props.filmId}</p>
                        </div>}

                        <div className="component">
                            <p className='component__title'>TITLE</p>
                            <input name={"title"} type={"text"} className="component__input"
                                   placeholder={"Title here"}/>
                        </div>
                        <div className="component">
                            <p className='component__title'>RELEASE DATE</p>
                            <input name={"date"} type={"date"} className="component__input"
                                   placeholder={"Release date here"}/>
                        </div>
                        <div className="component">
                            <p className='component__title'>MOVIE URL</p>
                            <input name="url" type="text" className="component__input"
                                   placeholder={"Movie URL here"}/>
                        </div>
                        <div className="component">
                            <p className='component__title'>GENRE</p>
                            <select className={"content__select"}>
                                <option>Choose genre:</option>
                                <option>Documentary</option>
                                <option>Comedy</option>
                                <option>Horror</option>
                                <option>Crime</option>
                            </select>
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
                        <ButtonGroup showReset/>
                    </div>
                </div>,
                document.getElementById("portal"))
        )
    } else {
        return (ReactDOM.createPortal(
                <div>
                    <div className={'background'}></div>
                    <div className={'delete-modal'}>
                        <div className={"close-div"}>
                            <button className='close-div__cansel-button' onClick={props.onClose}>X</button>
                        </div>
                        <div className={'title'}>
                            <h1>DELETE MOVIE</h1>
                            <p>Are you sure you want to delete this movie?</p>
                        </div>
                        <ButtonGroup/>
                    </div>
                </div>,
                document.getElementById("portal"))
        )
    }
}

export default Modal;