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
          <Route exact path='/profil/:id' component={ProfilPro} />
          <Route exact path='/profil/:id/ajout' component={AjoutPatient} />
          <Route exact path='/profil/:id/ajout/exercices/:newuser_id' component={PremierePrescription} />
          <Route exact path='/profil/:id/patient/:user_id' component={ProfilPatient} />
          <Route exact path='/profil/:id/patient/:user_id/exercices' component={ModifExercices} />
          <Route exact path='/profil/:id/patient/global/:user_id' component={StatGlobales} />
          <Route exact path='/user/:user_id' component={ProfilUser} />
          <Route exact path='/user/:user_id/scores' component={Scores} />
          <Route exact path='/user/:user_id/statistiques' component={Statistiques} />
          <Route exact path='/user/inscription' component={UserInscription} />
          <Route exact path='/txtATrou' component={TxtATrou} />
          <Route exact path='/jeuImage' component={JeuImage} />
          <Route exact path='/bneImage' component={BonneImage} />
          <Route exact path='/result/:user_id' component={Result} /> 
          <Route exact path='/user/:user_id/txtATrou' component={TxtATrou} /> 
          <Route exact path='/user/:user_id/jeuImage' component={JeuImage} /> 
          <Route exact path='/user/:user_id/bneImage' component={BonneImage} />
          <Route exact path='/user/:user_id/result' component={Result} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
