import React from 'react';
import './App.css';
import { useState } from 'react';
import { XyzTransition } from "@animxyz/react";

function App() {
  const [state, setState] = useState(false)
  const fadeNOut = () => {
    if (state) {
      setState(false)
    }
    else {
      setState(true)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <XyzTransition appear xyz="fade rotate-right ease-out-back">
          {state && <div className="square" />}
        </XyzTransition>
        <button onClick={fadeNOut}>fade toggle</button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
