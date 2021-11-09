import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './button';

function soma(a, b) {
  alert (a + b)
}

function App() {

  return (
    <div className="App">
      Olá  pessoal.
      <Button onClick={() => soma(10, 20)} name="Julia Santos"/>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement)
