import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Button, Input, Label } from 'reactstrap';
import './ProfilPatient.css';




class ProfilPatient extends Component {
  render() {
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Profil de <span id="user">Prénom Nom</span></h3></Col>
        </Row>
        <Row>
        <small class="sous-titre">Cliquez sur un jeu pour visualiser la progression d'un patient</small>
        </Row>

      </Container>
    );
  }
}

export default ProfilPatient;
