import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'reactstrap';
import './Profil.css';
import ChoixExercice from './ChoixExercice/ChoixExercice.js'
import Settings from './Settings/Settings'

class ProfilUser extends Component {

  constructor(props) {
    super(props);
    this.state = {name: '', firstname:'', mail: '', city:'', isModalOpen: false};
  
    this.showModal = this.showModal.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  showModal() {
    this.setState({
      isModalOpen: true
    });
  }

  render() {
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Bienvenue <span id="user">Prénom Nom</span></h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton" onClick={this.toggle}><h2><i class="fa fa-cog"></i></h2></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><h2><i class="fa fa-power-off"></i></h2></Button></Col>
        </Row>
        <Settings
          isOpen={this.state.isModalOpen}
          toggle={this.toggle}
        />
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
