import React from 'react';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
import Content from "./components/content/Content";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary.js"

const testarr = [{id: 1}]


function App() {
    return (
        <ErrorBoundary>
            <React.Fragment>
                <Banner/>
                <Content/>
                <Footer/>
            </React.Fragment>
        </ErrorBoundary>
    );
}

export default App;
