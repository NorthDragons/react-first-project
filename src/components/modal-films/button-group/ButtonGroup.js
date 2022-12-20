import React from "react";
import './ButtonGroupStyle.css'

export default (props) => {
    return (
        <div className='button-group'>
            {props.showReset && <button className='button-group__button' role='button'>RESET</button>}
            <button className='button-group__button submit' role='button'>{props.action}</button>
        </div>
    );
}