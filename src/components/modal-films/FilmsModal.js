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
                        {props.filmId!=null&&<div className={'title'}>
                            <p className='component__title'>MOVIE ID</p>
                            <p>{props.filmId}</p>
                        </div>}

                        <div className="component">
                            <p className='component__title'>{props.input[0].title}</p>
                            <input name={props.input[0].name} type={props.input[0].type} className="component__input"
                                   placeholder={props.input[0].placeholder}/>
                        </div>
                        <div className="component">
                            <p className='component__title'>{props.input[1].title}</p>
                            <input name={props.input[1].name} type={props.input[1].type} className="component__input"
                                   placeholder={props.input[1].placeholder}/>
                        </div>
                        <div className="component">
                            <p className='component__title'>{props.input[2].title}</p>
                            <input name={props.input[2].name} type={props.input[2].type} className="component__input"
                                   placeholder={props.input[2].placeholder}/>
                        </div>
                        <div className="component">
                            <p className='component__title'>{props.input[3].title}</p>
                            <input name={props.input[3].name} type={props.input[3].type} className="component__input"
                                   placeholder={props.input[3].placeholder}/>
                        </div>
                        <div className="component">
                            <p className='component__title'>{props.input[4].title}</p>
                            <input name={props.input[4].name} type={props.input[4].type} className="component__input"
                                   placeholder={props.input[4].placeholder}/>
                        </div>
                        <div className="component">
                            <p className='component__title'>{props.input[5].title}</p>
                            <input name={props.input[5].name} type={props.input[5].type} className="component__input"
                                   placeholder={props.input[5].placeholder}/>
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
                    <div className={'modal'}>
                        <button className='title__cansel-button' onClick={props.onClose}>X</button>
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