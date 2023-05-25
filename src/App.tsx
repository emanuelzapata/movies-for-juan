import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { Modal
 } from './components/Modal/Modal';
function App() {
  return (
    <div className="App">
      <Modal firstName="emanuel" lastName="zapata" />
    </div>
  );
}

export default App;
