import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SearchForm from './components/search/SearchForm'

function App() {
  return (
    <React.Fragment>
      <Header showButton={true}/>
      <SearchForm/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
