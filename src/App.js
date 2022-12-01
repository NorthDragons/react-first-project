import logo from './404.png';
import './App.css';
function App() {
  return (
    <body>

      <header>
        <div class="container">
          <p class="text"><span class="test">netflix</span>roulette</p>
        </div>
      </header>
      <div class="main">
        <div class="container">
          <h1 id="white" class="text">Page Not Found</h1>
          <img className="displayed" alt="404 not found" src={logo} />
          <button role="button">
            <h3>Go Back To Home</h3>
          </button>
        </div>
        <div class="container">

        </div>
      </div>
      <div class="footer">
        <h2 class="footer">NetflixRoulette</h2>
      </div>
    </body>
  );
}
export default App;
