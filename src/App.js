import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Accueil from './Accueil/Accueil.js';
import ProfilPro from './Pro/Profil/Profil.js';
import Inscription from './Pro/Inscription/Inscription.js';
import AjoutPatient from './Pro/Profil/AjoutPatient/AjoutPatient.js';
import ProfilPatient from './Pro/Profil/ProfilPatient.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Accueil} />
          <Route path='/inscription' component={Inscription} />
          <Route exact path='/profil' component={ProfilPro} />
          <Route path='/profil/ajout' component={AjoutPatient} />
          <Route path='/profil/patient' component={ProfilPatient} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
