import React from "react";
import './FilmModal.css'
import Title from "./title/Title";
import ButtonGroup from "./button-group/ButtonGroup";
import components from './add-components.json';

class Modal extends React.Component {


    constructor(props, context) {
        super(props, context);
        this.components = components;
    }

// componentDidMount() {
    //     this.root = document.createElement('div')
    //     document.body.appendChild(this.root);
    // }
    //
    // componentWillUnmount() {
    //     document.body.removeChild(this.root);
    // }

    render() {
        return (
            // ReactDOM.createPortal(
            <div className={'modal'}>
                <Title/>


                <div className="component">
                    <p className='parameter__title'>TITLE</p>
                    <input name="title" type="text" className="modal__input"
                           placeholder="Title here"/>
                </div>
                <div className="component">
                    <p className='parameter__title'>RELEASE DATE</p>

                    <input name="date" type="date" className="modal__input"
                           placeholder="Select Date"/>
                </div>
                <div className="component">
                    <p className='parameter__title'>MOVIE URL</p>
                    <input name="url" type="url" className="modal__input"
                           placeholder="Movie URL here"/>
                </div>
                <div className="component">
                    <p className='parameter__title'>GENRE</p>
                    <input name="genre" type="text" className="modal__input"
                           placeholder="Select Genre"/>
                </div>
                <div className="component">
                    <p className='parameter__title'>OVERVIEW</p>
                    <input name="overview" type="text" className="modal__input"
                           placeholder="Overview here"/>
                </div>
                <div className="component">
                    <p className='parameter__title'>RUNTIME</p>
                    <input name="runtime" type="text" className="modal__input"
                           placeholder="Runtime here"/>
                </div>
                <ButtonGroup/>
            </div>
            // ,this.root)
        )
    }

}

export default Modal;