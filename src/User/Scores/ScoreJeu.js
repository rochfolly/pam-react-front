import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Scores.css';
import GraphLineaire from '../../Graph/GraphLineaire.js'

class ScoreJeu extends Component {

  render() {

    console.log(this.props.exo.title+" : "+this.props)

    return (
      <Container>
      <Row>
      <Col sm={3}><img src={require(`../../Images/exo${this.props.exo.id}.png`)} alt="jeu" class="GameLogo"/></Col>
      <Col sm={9}>
      <Row><b>{this.props.exo.title}</b></Row>
      <Row>Parties jouées : {this.props.exo.plays}</Row>
      <Row>Meilleur score : {this.props.exo.bestScore}</Row>
      <Row>Dernière partie : {this.props.exo.lastPlay}</Row>
      <Row>Score : {this.props.exo.lastScore}/500</Row>
      </Col>
      </Row>
      <br/>
      <Row>
      <Col><GraphLineaire exercice={this.props.exo} /></Col>
      </Row>
      <br/>
      </Container>
    );
  }
}

export default ScoreJeu;
