import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Button, Input, Label } from 'reactstrap';
import './ExercicePatient.css';
import game from '../../../Images/dice.png';

class ExercicePatient extends Component {

  render() {
    return (
      <Container>
      <FormGroup row>
      <Col sm={3}><img src={game} alt="jeu" class="GameLogo"/></Col>
      <Col sm={9}>
      <Row>Titre</Row>
      <Row>Description</Row>
      <Row>Niveau : X</Row>
      <Row>Dernière partie : 00/00/0000</Row>
      <Row>Score : X/X</Row>
      </Col>
      </FormGroup>
      </Container>
    );
  }
}

export default ExercicePatient;
