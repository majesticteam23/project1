import logo from './logo.svg';
import './App.css';
import mlogo from './img/mlogo.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mlogo} className="App-logo" alt="logo" />
      
        <p>
          Team majeasstic 2023
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
