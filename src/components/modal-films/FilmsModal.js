import React from "react";
import './FilmModal.css'
import ReactDOM from "react-dom";

function FilmsModal(props) {

    return (
        ReactDOM.createPortal(
            <React.Fragment>
                <div className={'background'}></div>
                <div className={props.className}>
                    <div className={'title'}>
                        <button className='title__cansel-button' onClick={props.onClose}>X</button>
                        <h1>{props.title}</h1>
                    </div>
                    <div className={'body'}>
                        {props.children}
                    </div>
                    <div className='button-group'>
                        {!props.hideReset && <button className='button-group__button' role='button'>RESET</button>}
                        <button className='button-group__button submit' role='button'>{props.action}</button>
                    </div>
                </div>
            </React.Fragment>,
            document.getElementById("portal"))
    )
}

export default FilmsModal;