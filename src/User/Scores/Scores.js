import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './Scores.css';
import ScoreJeu from './ScoreJeu.js'

class Scores extends Component {

  goBackTo(){
    const {user_id} = this.props.match.params
    const link = "/user/" + user_id
    return link
  }

  render() {
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Vos scores</h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><a href={this.goBackTo()}><h2><i class="fa fa-arrow-left"></i></h2></a></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><h2><i class="fa fa-power-off"></i></h2></Button></Col>
        </Row>
        <br/><br/>
        <Row>
        <Col sm="6"><ScoreJeu /></Col>
        <Col sm="6"><ScoreJeu /></Col>
        </Row>
        <br/>
        <Row>
        <Col sm="6"><ScoreJeu /></Col>
        <Col sm="6"><ScoreJeu /></Col>
        </Row>
        <br/>
      </Container>
    );
  }
}

export default Scores;
