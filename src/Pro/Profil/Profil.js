import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Button, Input, Label } from 'reactstrap';
import {Glyphicon} from 'react-bootstrap';
import logo from '../../Images/logoPAM.png';
import user from '../../Images/user.png';
import './Profil.css';




class ProfilPro extends Component {
  render() {
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Bienvenue <span id="user">Prénom Nom</span></h3></Col>
        <Col sm={{size: 2}}><img src={logo} className="Inscription-logo" alt="logoPAM" /></Col>
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
        <Row>
        <ul className="patients">
        <a href="/profil/user/:1"><li>
          <img src={user} className="User-logo" alt="user" />
          <span>Pierre Dubois</span>
        </li></a>
        <a href="/profil/user/:2"><li>
          <img src={user} className="User-logo" alt="user" />
          <span>Michel Dupond</span>
        </li></a>
        <a href="/profil/user/:3"><li>
          <img src={user} className="User-logo" alt="user" />
          <span>Irène Rivière</span>
        </li></a>
        </ul>
        </Row>
      </Container>
    );
  }
}

export default ProfilPro;
