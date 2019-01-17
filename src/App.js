import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Accueil from './Accueil/Accueil.js';
//Component PRO
import ProfilPro from './Pro/Profil/Profil.js';
import Inscription from './Pro/Inscription/Inscription.js';
import AjoutPatient from './Pro/Profil/AjoutPatient/AjoutPatient.js';
import ProfilPatient from './Pro/Profil/ProfilPatient/ProfilPatient.js';
import ModifExercices from './Pro/Profil/ProfilPatient/ModifExercices.js';
import StatGlobales from './Pro/Profil/ProfilPatient/StatGlobales.js';
//Component PATIENT
import ProfilUser from './User/Profil.js';
import Scores from './User/Scores/Scores.js';
import Statistiques from './User/Statistiques/Statistiques.js'
import UserInscription from './User/Inscription/Inscription.js'
import TxtATrou from './Jeux/TxtATrou';
import JeuImage from './Jeux/JeuImage';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Accueil} />
          <Route path='/inscription' component={Inscription} />
          <Route exact path='/profil' component={ProfilPro} />
          <Route path='/profil/ajout' component={AjoutPatient} />
          <Route exact path='/profil/patient/:id' component={ProfilPatient} />
          <Route path='/profil/patient/exercices' component={ModifExercices} />
          <Route path='/profil/patient/global' component={StatGlobales} />
          <Route exact path='/user' component={ProfilUser} />
          <Route exact path='/user/scores' component={Scores} />
          <Route exact path='/user/statistiques' component={Statistiques} />
          <Route exact path='/user/inscription' component={UserInscription} />
          <Route exact path='/user/txtATrou' component={TxtATrou} /> 
          <Route exact path='/user/jeuImage' component={JeuImage} /> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
