import React from "react";
import './FilmModal.css'
import ReactDOM from "react-dom";
import ButtonGroup from "./button-group/ButtonGroup";
import Genre from "./genre-dropdown/Genre";

function Modal(props) {
    return (
        ReactDOM.createPortal(
            <React.Fragment>
                <div className={'background'}></div>
                <div className={props.className}>
                    <div className={'title'}>
                        <button className='title__cansel-button' onClick={props.onClose}>X</button>
                        <h1>{props.title}</h1>
                        {props.del && <p className={'modal-del__p-del'}>Are you sure you want to delete this movie?</p>}
                    </div>
                    {!props.del &&
                        <div className={'input-group'}>
                            {props.filmId != null && <div className={'component'}>
                                <p className='component__title'>MOVIE ID</p>
                                <p className={"component__p-id"}>{props.filmId}</p>
                            </div>}
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
                        </div>}
                    <ButtonGroup showReset={!props.del}/>
                </div>
            </React.Fragment>,
            document.getElementById("portal"))
    )
}

export default Modal;