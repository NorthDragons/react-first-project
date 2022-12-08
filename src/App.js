import React from 'react';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
import Content from "./components/content/Content";

const testarr = [{id: 1}]


function App() {
    return (
        <React.Fragment>
            <Banner/>
            <Content/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
