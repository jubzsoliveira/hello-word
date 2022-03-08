import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function conta(a, b) {
  return a + b
}

function primeiroJSX() {
  return (
    <div className="teste">
      Julia Santos de Oliveira - Introdução ao ReactJS
      <h1> Soma: {conta(10, 20)}</h1>
    </div>
  )
}

  const App = () => {

    return (
      <div className="App">
        {primeiroJSX()}
      </div>
    )
  }

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
