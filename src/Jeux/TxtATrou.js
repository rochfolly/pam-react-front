import React, { Component } from 'react';
import { Container, Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';
import './TxtATrou.css'
import game from '../Images/dice.png'

class TxtATrou extends Component {

  render() {
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Texte à trous</h3></Col>
        <Col sm={{size: 2}}><img src={game} alt="jeu" class="txtATrouLogo"/></Col>
        </Row>
        <div id="phrase">
            <FormGroup row>
                <Label for="trou"><h2>Voici une phrase d'une dizaine de</h2></Label>
                <Input type="text" id="trou" size="8" placeholder="________________"/>
                <h2> stylé non ? et là ça fait environ une quinzaine</h2>
            </FormGroup>
        </div>
        <br/>
        <div id="niv1">
            <Row>
                <Col sm={{size:2, offset:4}}><Button className="rep" id="rep1">phrases</Button></Col>
                <Col sm={{size:2, offset:1}}><Button className="rep" id="rep2">mots</Button></Col>
            </Row>
            <Row>
                <Col sm={{size:2, offset:4}}><Button className="rep" id="rep3">lapins</Button></Col>
                <Col sm={{size:2, offset:1}}><Button className="rep" id="rep4">boissons</Button></Col>
            </Row>
            <Row>
                <Col sm={{size: 4}}><Button className="footerLeft"><a href="/user">Quitter</a></Button></Col>
                <Col sm={{size: 4}}><Button className="footerRight">Valider</Button></Col>
            </Row>
        </div>
      </Container>
    );
  }
}

export default TxtATrou;
