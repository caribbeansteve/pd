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
        <MainPage />
      </header>
    </div>
  );
}

export default App;
