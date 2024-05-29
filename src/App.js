import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './Components/Calendar/Calendar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Calendar />
      </header>
    </div>
  );
}

export default App;
