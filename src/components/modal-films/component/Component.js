import React from "react";
import './ComponentStyle.css'

export default (props) => {
    return (
        <div className="component">
            <p className='parameter__title'>props.component.title</p>
            <input name="title" type="text" className="modal__input"
                   placeholder="Title here"/>
        </div>
    );
}