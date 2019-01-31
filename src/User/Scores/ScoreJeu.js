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
      <Row><b>{this.props.exo.title}</b></Row>
      <Row>Parties jouées : {this.props.exo.plays}</Row>
      <Row>Meilleur score : {this.props.exo.bestScore}</Row>
      <Row>Dernière partie : {this.props.exo.lastPlay}</Row>
      <Row>Score : {this.props.exo.lastScore}</Row>
      </Col>
      </Row>
      <br/>
      <Row>
      <Col><GraphLineaire exercice={this.props.exo} /></Col>
      </Row>
      </Container>
    );
  }
}

export default ScoreJeu;
