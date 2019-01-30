import React, { Component } from 'react';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import './ChoixExercice.css';
import game from '../../Images/dice.png';

class ChoixExercice extends Component {

  goToExo = exo_id => {

    const link1 = "/user/" + this.props.exo.user_id + "/txtATrou", 
          link2 = "/user/" + this.props.exo.user_id + "/jeuImage",
          link3 = "/user/" + this.props.exo.user_id + "/bneImage"


    if(exo_id === 1){ return link1 }
    else if(exo_id === 2) {return link2}
    else if(exo_id === 3) {return link3} 
    
  }

  render() {
    const titre = (this.props.exo) ? this.props.exo.exo_name : 'Titre'
    const niveau = (this.props.exo) ? this.props.exo.level : '0'
    console.log(this.props.exo)

    return (
      <Container>
      <FormGroup row>
      <a href={this.goToExo(this.props.exo.exo_id)}>
      <Col sm={3}><img src={game} alt="jeu" class="GameLogo"/></Col>
      <Col sm={9}>
      <Row>{titre}</Row>
      <Row>Niveau : {niveau}</Row>
      <Row>Dernière partie : 00/00/0000</Row>
      <Row>Score : X/X</Row>
      </Col>
      </a>
      </FormGroup>
      </Container>
    );
  }
}

export default ChoixExercice;
