import React, { Component } from 'react';
import { Container, Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';
import './JeuImage.css'
import game from '../Images/dice.png'

class JeuImage extends Component {

  render() {
    return (
      <Container>
      <br/>
        <Row>
        <Col sm="10">
            <Row>
                <Col sm={{size: 6}}><h3 class="titlePAM">Jeu d'image</h3></Col>
                <Col sm={{size: 6}}><h6 className="exNumber titlePAM">Exercice 1/10</h6></Col>
            </Row>
            <Row><h5 className="sous-titre">A quel mot correspond cette image ?</h5></Row>
        </Col>
        <Col sm={{size: 1, offset:1}}><img src={game} alt="jeu" class="jeuImageLogo"/></Col>
        </Row>
        <Row>
            <Col sm={{size: 3, offset:3}} className="jeuImg"></Col>
            <Col sm={{size: 3, offset:1}}>
                <Row><Button className="jeuSol" id="jeuSol1">Singe</Button></Row>
                <Row><Button className="jeuSol" id="jeuSol2">Tigre</Button></Row>
                <Row><Button className="jeuSol" id="jeuSol3">Glace</Button></Row>
                <Row><Button className="jeuSol" id="jeuSol4">Poisson</Button></Row>
                <Row><Button className="jeuSol" id="jeuSol5">Guacamole</Button></Row>
            </Col>
        </Row>
        <Row>
            <Col sm={{size: 4}}><Button className="footerLeft"><a href="/user">Quitter</a></Button></Col>
            <Col sm={{size: 4}}><Button className="footerRight">Valider</Button></Col>
        </Row>
        
      </Container>
    );
  }
}

export default JeuImage;
