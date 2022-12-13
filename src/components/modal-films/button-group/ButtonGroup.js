import React from "react";
import './ButtonGroupStyle.css'

export default ()=>{
    return(
        <div className='component button-group'>
            <button className='button-group__button' role='button'>RESET</button>
            <button className='button-group__button submit' role='button'>SUBMIT</button>
        </div>
    );
}