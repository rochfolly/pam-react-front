import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Input, Button} from 'reactstrap';
import './ChoixExercice.css';
import game from '../../../../Images/dice.png';
import { deletePrescription } from '../../../../utils/API'


class ChoixExercice extends Component {

  deleteAccess = _ => {
    deletePrescription(this.props.exo.exo_id, this.props.id )
  }

  render() {
    const level1 = (this.props.exo.level >= 1) ? <Input type="checkbox" id="niv1" checked/> : <Input type="checkbox" id="niv1"/>
    const level2 = (this.props.exo.level >= 2) ? <Input type="checkbox" id="niv2" checked/> : <Input type="checkbox" id="niv2"/>
    const level3 = (this.props.exo.level === 3) ? <Input type="checkbox" id="niv3" checked/> : <Input type="checkbox" id="niv3"/>

    return (
      <Container>
      <FormGroup row>
      <Col sm={3}><img src={game} alt="jeu" class="Game-logo"/></Col>
      <Col sm={8}>
      <Row>
        <Col sm={9}><b>Exercice {this.props.exo.exo_id} : {this.props.exo.exo_name}</b></Col>
        <Button onClick={this.deleteAccess}>X</Button>
      </Row>
      <br/>
      <Row>
      <Col sm={3} className="no-padding">Niveau</Col>
      <Col sm={2}>1{level1}</Col>
      <Col sm={2}>2{level2}</Col>
      <Col sm={2}>3{level3}</Col>
      </Row>
      </Col>
      </FormGroup>
      </Container>
    );
  }
}

export default ChoixExercice;
