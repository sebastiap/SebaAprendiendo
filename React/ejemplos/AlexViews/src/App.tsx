import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ServicePage } from './Pages/Screen/Servicios';
import { CertidaoPage } from './Pages/Screen/Certidao';

function App() {
  return (
    <div className="App">
      {/* <CertidaoPage/> */}
      <ServicePage/>
    </div>
  );
}

export default App;
