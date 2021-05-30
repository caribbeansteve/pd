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
        <MainPage />
    </div>
  );
}

export default App;
