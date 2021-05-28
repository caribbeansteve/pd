import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ethers } from "ethers";
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
