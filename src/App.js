import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Accueil from './Accueil/Accueil.js';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Accueil />
      </BrowserRouter>
    );
  }
}

export default App;
