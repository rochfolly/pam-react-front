import React, { Component } from 'react';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import './ExercicePatient.css';

class ExercicePatient extends Component {

  render() {
    const titre = (this.props.exo) ? this.props.exo.exo_name : 'Titre'
    const niveau = (this.props.exo) ? this.props.exo.level : '0'
    console.log(this.props.exo)

    return (
      <Container>
      <FormGroup row>
      <Col sm={3}><img src={require(`../../../Images/exo${this.props.exo.exo_id}.png`)} alt="jeu" class="GameLogo"/></Col>
      <Col sm={9}>
      <Row><b>{titre}</b></Row>
      <Row>Niveau : {niveau}</Row>
      <Row>Dernière partie : 00/00/0000</Row>
      <Row>Score : X/X</Row>
      </Col>
      </FormGroup>
      </Container>
    );
  }
}

export default ExercicePatient;
