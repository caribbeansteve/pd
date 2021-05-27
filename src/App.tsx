import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ethers } from "ethers";
import Address from './Address'

declare global {
  interface Window {
    ethereum : any;
  }
}

let signer;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Address />
      </header>
    </div>
  );
}


export default App;
