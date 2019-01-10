import React, { Component } from 'react';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import './ChoixExercice.css';
import game from '../../Images/dice.png';

class ChoixExercice extends Component {

  render() {
    return (
      <Container>
      <FormGroup row>
      <Col sm={3}><img src={game} alt="jeu" class="GameLogo"/></Col>
      <Col sm={9}>
      <Row>Titre</Row>
      <Row>Dernière partie : 00/00/0000</Row>
      <Row>Score : X/X</Row>
      </Col>
      </FormGroup>
      </Container>
    );
  }
}

export default ChoixExercice;
