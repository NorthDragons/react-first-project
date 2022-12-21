import React from "react";
import './FilmModal.css'
import ReactDOM from "react-dom";
import Button from "../button/Button";
import PropTypes from "prop-types";

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
                        <Button className='button-group__button submit'>{props.action}</Button>
                    </div>
                </div>
            </React.Fragment>,
            document.getElementById("portal"))
    )
}

FilmsModal.propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.node,
    hideReset: PropTypes.bool,
    action: PropTypes.string
}
export default FilmsModal;