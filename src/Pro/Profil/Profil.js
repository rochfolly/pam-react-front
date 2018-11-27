import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Button, Input, Label } from 'reactstrap';
import {Glyphicon} from 'react-bootstrap';
import logo from '../../Images/logoPAM.png';
import './Profil.css';




class ProfilPro extends Component {
  render() {
    return (
      <Container>
        <Row>
        <Col sm={{size: 4}}><h3>Bienvenue <span id="user">Prénom Nom</span></h3></Col>
        <Col sm={{size: 2, offset: 6}}><img src={logo} className="Inscription-logo" alt="logoPAM" /></Col>
        </Row>
        <br/><br/>
        <Row>
        <Col sm={{size:4, offset:4}}>
          <Button><Glyphicon glyph="star" /> Ajouter un nouveau patient</Button>
        </Col>
        </Row>
        <br/><br/>
        <Row>
        <Col>
        <p> Voici la liste de vos patients enregistrés, cliquez dessus pour voir leur profil ! </p>

        </Col>
        </Row>
      </Container>
    );
  }
}

export default ProfilPro;
