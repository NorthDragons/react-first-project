import React from "react";
import './FilmModal.css'
import Title from "./title/Title";
import ButtonGroup from "./button-group/ButtonGroup";
import components from './add-components.json';
import Component from "./component/Component";
import ReactDOM from "react-dom";

function Modal(props) {

        const addComponents = components;
        return ReactDOM.createPortal(
            <div className={'modal'}>
                <button className='title__cansel-button'  onClick={props.onClose}>X</button>
                <Title/>
                {addComponents.map(component => {
                    return <Component component={component}/>
                })}
                <ButtonGroup/>
            </div>,
            document.getElementById("portal")
        );
}

export default Modal;