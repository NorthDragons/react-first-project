import React from 'react';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
import Content from "./components/content/Content";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary.js"
import {createPortal} from "react-dom";
import FilmsModal from "./components/modal-films/FilmsModal.js";


class App extends React.Component {
    // state = {
    //     isModalOpen: true
    // }
    //
    // toggleModal = () => {
    //     this.setState(state => ({isModalOpen: !state.isModalOpen}))
    // }
    render() {
        return (
            <ErrorBoundary>
                <React.Fragment>
                    <Banner onClick={this.toggleModal}/>
                    <Content/>
                    <Footer/>
                    {/*{this.state.isModalOpen && <FilmsModal onClose={this.toggleModal}/>}*/}
                </React.Fragment>
            </ErrorBoundary>
        );
    }


}

export default App;
