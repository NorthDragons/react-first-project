import React from 'react';
import logo404 from './404.png';
import './App.css';

const logo = <span className='logo'><span className='logo-bold'>netflix</span>roulette</span>
function App() {
  return (
    <React.Fragment>
      <div className="header">
        {logo}
      </div>
      <div className="main">
        <h1 id="not-found" className="text">Page Not Found</h1>
        <img alt="404 not found" src={logo404} />
        <button role="button">
          <span>Go Back To Home</span>
        </button>
      </div>
      <div className="footer">
        {logo}
      </div>
    </React.Fragment>
  );
}

class App1 extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <p className="text"><span class="test">netflix</span>roulette</p>
        </div>
        <div class="main">
          <div class="container">
            <h1 id="white-text" class="text">Page Not Found</h1>
            <img className="displayed" alt="404 not found" src={logo} />
            <button role="button">
              <h3>Go Back To Home</h3>
            </button>
          </div>
          <div class="container">

          </div>
        </div>
        <div class="footer">
          <h2 class="footertext">NetflixRoulette</h2>
        </div>
      </div>
    );
  }
}
class App2 extends React.PureComponent {
  render() {
    return (
      <div>
        <div class="header">
          <p class="text"><span class="test">netflix</span>roulette</p>
        </div>
        <div class="main">
          <div class="container">
            <h1 id="white-text" class="text">Page Not Found</h1>
            <img className="displayed" alt="404 not found" src={logo} />
            <button role="button">
              <h3>Go Back To Home</h3>
            </button>
          </div>
          <div class="container">
          </div>
        </div>
        <div class="footer">
          <h2 class="footertext">NetflixRoulette</h2>
        </div>
      </div>
    );
  }
}


export default App;
