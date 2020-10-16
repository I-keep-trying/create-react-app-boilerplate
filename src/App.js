import React from 'react';
import { ToastContainer, Slide } from 'react-toastify'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <ToastContainer pauseOnFocusLoss={false} autoClose={2000} transition={Slide} />
    </div>
  );
}

export default App;
