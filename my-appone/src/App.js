import logo from './logo.svg';
import './App.css';
import mlogo from './img/mlogo.jpg'
import list  from './components/teammemberlist.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mlogo} className="App-logo" alt="logo" />
      
        <p>
          Team majeasstic 2023
        </p>
        <a href='./components/teammemberlist.js'> view </a>
        <ul>
        <li>
            hi
        </li>
          
      </ul>
      </header>

    </div>
  );
}

export default App;
