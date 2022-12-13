import React from "react";
import './ComponentStyle.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div className="component">
            <p className='component__title'>{props.component.title}</p>
            <input name={props.component.name} type={props.component.type} className="component__input"
                   placeholder={props.component.placeholder}/>
        </div>
    );
}