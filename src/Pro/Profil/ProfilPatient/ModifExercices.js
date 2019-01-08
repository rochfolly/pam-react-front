import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Button, Input, Label } from 'reactstrap';
//import './ModifExercices.css';
import ChoixExercice from '.././AjoutPatient/ChoixExercice/ChoixExercice'



class ModifExercices extends Component {
  render() {
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Modification</h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><h2><i class="fa fa-arrow-left"></i></h2></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><h2><i class="fa fa-power-off"></i></h2></Button></Col>
        </Row>
        <br/>
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

export default ModifExercices;
