import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Button, Input, Label } from 'reactstrap';


class StatGlobales extends Component {
  render() {
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Statistiques globales du patient</h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><h2><i class="fa fa-arrow-left"></i></h2></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><h2><i class="fa fa-power-off"></i></h2></Button></Col>
        </Row>
        <br/>

      </Container>
    );
  }
}

export default StatGlobales;
