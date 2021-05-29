import React from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';

declare global {
  interface Window {
    ethereum : any;
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        Pool Daddies
        </div>
        <MainPage />
      </header>
      <div className="App-Body">
        Testing
      </div>
    </div>
  );
}


export default App;
