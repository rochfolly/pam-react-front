import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'reactstrap';
import user from '../Images/user.png';
import './Profil.css';
import ChoixExercice from './ChoixExercice/ChoixExercice.js'

class ProfilUser extends Component {
  render() {
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Bienvenue <span id="user">Prénom Nom</span></h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><h2><i class="fa fa-cog"></i></h2></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><h2><i class="fa fa-power-off"></i></h2></Button></Col>
        </Row>
        <br/>
        <Row>
        <Col sm={{size:3, offset:3}}>
          <Button><a href="/user/statistiques">Accéder à votre profil global</a></Button>
        </Col>
        <Col sm={{size:3}}>
          <Button><a href="/user/scores">Accéder à vos scores</a></Button>
        </Col>
        </Row>
        <br/>
        <Row>
        <Col>
        <small class="sous-titre">Cliquez sur un jeu pour lancer une partie </small>
        </Col>
        </Row><br/>
        <Row>
        <Col onClick={this.toggle} sm="6"><ChoixExercice /></Col>
        <Col onClick={this.toggle} sm="6"><ChoixExercice /></Col>
        </Row>
        <br/>
        <Row>
        <Col onClick={this.toggle} sm="6"><ChoixExercice /></Col>
        <Col onClick={this.toggle} sm="6"><ChoixExercice /></Col>
        </Row>
        <br/>

      </Container>
    );
  }
}

export default ProfilUser;
