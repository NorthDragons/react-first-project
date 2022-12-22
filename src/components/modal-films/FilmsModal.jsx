import React from "react";
import './FilmModal.css'
import ReactDOM from "react-dom";
import Button from "../button/Button";

function FilmsModal({className, onClose, title, children, hideReset, action}) {

    return (
        ReactDOM.createPortal(
            <React.Fragment>
                <div className={'background'}></div>
                <div className={className}>
                    <div className={'title'}>
                        <button className='title__cansel-button' onClick={onClose}>X</button>
                        <h1>{title}</h1>
                    </div>
                    <div className={'body'}>
                        {children}
                    </div>
                    <div className='button-group'>
                        {!hideReset && <button className='button-group__button' role='button'>RESET</button>}
                        <Button className='button-group__button submit'>{action}</Button>
                    </div>
                </div>
            </React.Fragment>,
            document.getElementById("portal"))
    )
}

export default FilmsModal;