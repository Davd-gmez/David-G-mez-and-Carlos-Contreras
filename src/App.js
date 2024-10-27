import bowser from './bowser.png';
import background from './background.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video src={background} autoPlay muted loop></video> 
        <img src={bowser} className="App-logo" alt="bowser" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
