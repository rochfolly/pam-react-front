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
import PremierePrescription from './Pro/Profil/AjoutPatient/PremierePrescription/PremierePrescription';
import BonneImage from './Jeux/BonneImage';
import Result from './Jeux/Result';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Accueil} />
          <Route exact path='/inscription' component={Inscription} />
          <Route exact path='/profil' component={ProfilPro} />
          <Route path='/profil/ajout/:id' component={AjoutPatient} />
          <Route path='/profil/ajout/:id/exercices/:newuser_id' component={PremierePrescription} />
          <Route path='/profil/patient/:id' component={ProfilPatient} />
          <Route path='/profil/patient/:id/exercices' component={ModifExercices} />
          <Route exact path='/profil/patient/global' component={StatGlobales} />
          <Route exact path='/user' component={ProfilUser} />
          <Route exact path='/user/scores' component={Scores} />
          <Route exact path='/user/statistiques' component={Statistiques} />
          <Route exact path='/user/inscription' component={UserInscription} />
          <Route exact path='/user/txtATrou' component={TxtATrou} /> 
          <Route exact path='/user/jeuImage' component={JeuImage} /> 
          <Route exact path='/user/bneImage' component={BonneImage} />
          <Route exact path='/user/result' component={Result} /> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
