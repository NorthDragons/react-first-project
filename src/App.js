import React from 'react';
import logo404 from './404.png';
import './App.css';
const createLogoElement = React.createElement('span', { className: 'logo' }, React.createElement('span', { className: 'logo-bold' }, 'netflix'), 'roulette')
const logo = <span className='logo'><span className='logo-bold'>netflix</span>roulette</span>

function App() {
  return (
    React.createElement(React.Fragment, null,
      React.createElement('div', { className: 'header' },
        createLogoElement),
      React.createElement('div', { className: 'main' },
        React.createElement('h1', { id: 'not-found', className: 'text' }, 'Page Not Found'
        ),
        React.createElement('img', { alt: '404 not found', src: logo404  }
        ),
        React.createElement('button', { role: 'button' }, 'Go Back To Home'
        )),
      React.createElement('div', {className:'footer'},
       createLogoElement)
    )
  );
  // return (
  //   <React.Fragment>
  //     <div className="header">
  //       {logo}
  //     </div>
  //     <div className="main">
  //       <h1 id="not-found" className="text">Page Not Found</h1>
  //       <img alt="404 not found" src={logo404} />
  //       <button role="button">
  //         Go Back To Home
  //       </button>
  //     </div>
  //     <div className="footer">
  //       {logo}
  //     </div>
  //   </React.Fragment>
  // );
}

class App1 extends React.Component {
  render() {
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
}
class App2 extends React.PureComponent {
  render() {
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
}


export default App;
