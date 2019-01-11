import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Input} from 'reactstrap';
import './ChoixExercice.css';
import game from '../../../../Images/dice.png';




class ChoixExercice extends Component {

  render() {
    return (
      <Container>
      <FormGroup row>
      <Col sm={1}><Input type="checkbox" id="exXX"/></Col>
      <Col sm={3}><img src={game} alt="jeu" class="Game-logo"/></Col>
      <Col sm={8}>
      <Row>Titre</Row>
      <Row>Description</Row>
      <Row>
      <Col sm={3} className="no-padding">Niveau</Col>
      <Col sm={2}>1<Input type="checkbox" id="niv1"/></Col>
      <Col sm={2}>2<Input type="checkbox" id="niv2"/></Col>
      <Col sm={2}>3<Input type="checkbox" id="niv3"/></Col>
      </Row>
      </Col>
      </FormGroup>
      </Container>
    );
  }
}

export default ChoixExercice;
