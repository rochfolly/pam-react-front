import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Button, Input, Label } from 'reactstrap';
import './AjoutPatient.css';
import ChoixExercice from './ChoixExercice/ChoixExercice'



class AjoutPatient extends Component {
  render() {
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Nouveau patient</h3></Col>
        </Row>
        <br/>
        <FormGroup row>
        <Label for="name" sm={1}>Nom*</Label>
          <Col sm={4}>
            <Input type="text" name="name" id="name" placeholder="Nom" required/>
          </Col>
          <Label for="firstname" sm={{size:1, offset:1}}>Prénom*</Label>
          <Col sm={4}>
            <Input type="text" name="firstName" id="firstName" placeholder="Prénom"  required/>
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="email" sm={1}>Email*</Label>
          <Col sm={4}>
            <Input type="email" name="email" id="email" placeholder="exemple@gmail.com" required/>
            <small>Un email lui sera envoyé pour terminer l'inscription</small>
          </Col>
        </FormGroup>
        <Row>
        <h3>Exercices accessibles au patient :</h3>
        </Row>
        <br/>
        <Row>
        <Col sm="6"><ChoixExercice /></Col>
        <Col sm="6"><ChoixExercice /></Col>
        </Row>
        <br/>
        <Row>
        <Col sm="6"><ChoixExercice /></Col>
        <Col sm="6"><ChoixExercice /></Col>
        </Row>
        <br/>
        <Row>
        <Col sm={{size:2, offset:10}}>
          <Button>Valider</Button>
        </Col>
        </Row>
      </Container>
    );
  }
}

export default AjoutPatient;
