import React, {useState} from 'react';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
import Content from "./components/content/Content";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary.js"
import filmsJson from "./components/films.json"

function App() {
    const [films, setFilms] = useState(filmsJson)
    const [film, setFilm] = useState('');

    function setFilmInfo(filmForUpdate) {
        setFilm(filmForUpdate);
        console.log(film)
    }

    function removeFilmInfo() {
        setFilm('');
    }

    return (
        <ErrorBoundary>
            <React.Fragment>
                <Banner film={film} onClose={removeFilmInfo}/>
                <Content onClick={setFilmInfo} films={films}/>
                <Footer/>
            </React.Fragment>
        </ErrorBoundary>
    );
}

export default App;
