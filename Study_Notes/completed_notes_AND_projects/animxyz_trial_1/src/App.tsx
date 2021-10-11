import "@animxyz/core"
import React from 'react';
import './App.css';
import { useState } from 'react';
import { XyzTransition, XyzTransitionGroup } from "@animxyz/react";

function App() {
  const [state, setState] = useState(true)
  const [numElements, setNumElements] = useState(3)
  
  const fadeNOut = () => {
    if (state) {
      setState(false)
    }
    else {
      setState(true)
    }
  }
  function addElement() {
    setNumElements((oldNumElements) => oldNumElements + 1);
  }

  function removeElement() {
    setNumElements((oldNumElements) => {
      if (oldNumElements > 0) {
        return oldNumElements - 1;
      }
      return oldNumElements;
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <XyzTransition appear xyz="fade rotate-right ease-out-back">
          {state && <div className="square" />}
        </XyzTransition>
        <button onClick={fadeNOut}>fade toggle</button>
        <XyzTransitionGroup
          appear
          className="example-grid"
          xyz="fade big out-down out-rotate-right appear-stagger"
        >
          {[...Array(numElements)].map((index) => (
            <div className="square" key={index} />
          ))}
        </XyzTransitionGroup>
        <div className="flex-row">
          <button className="example-button" onClick={addElement}>
            Add Element
          </button>
          <button className="example-button" onClick={removeElement}>
            Remove Element
          </button>
        </div>
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
