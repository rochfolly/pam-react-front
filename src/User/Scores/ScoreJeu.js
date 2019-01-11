import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Scores.css';
import game from '../../Images/dice.png';
import GraphLineaire from '../../Graph/GraphLineaire.js'

class ScoreJeu extends Component {

  render() {
    return (
      <Container>
      <Row>
      <Col sm={3}><img src={game} alt="jeu" class="GameLogo"/></Col>
      <Col sm={9}>
      <Row>Titre</Row>
      <Row>Parties jouées : X</Row>
      <Row>Meilleur score : X</Row>
      <Row>Dernière partie : 00/00/0000</Row>
      <Row>Score : X/X</Row>
      </Col>
      </Row>
      <br/>
      <Row>
      <Col><GraphLineaire /></Col>
      </Row>
      </Container>
    );
  }
}

export default ScoreJeu;
