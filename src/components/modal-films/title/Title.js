import React from "react";
import './TitleStyle.css'


export default ()=>{
    return(
        <div className={'title'}>
            <button className='cansel-button' role='button'><img src='/images/cancel-button.png'/></button>
            <h1>ADD MOVIE</h1>
        </div>
    );
}