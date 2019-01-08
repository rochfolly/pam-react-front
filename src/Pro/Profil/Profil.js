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
        <Col sm={{size: 1}}><Button className ="smallButton"><h2><i class="fa fa-cog"></i></h2></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><h2><i class="fa fa-power-off"></i></h2></Button></Col>
        </Row>
        <br/><br/>
        <Row>
        <Col sm={{size:4, offset:4}}>
          <Button><a href="/profil/ajout">Ajouter un nouveau patient</a></Button>
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
        <a href="/profil/patient"><li>
          <img src={user} className="User-logo" alt="user" />
          <span>Prénom Nom</span>
        </li></a>
        <a href="/profil/patient"><li>
          <img src={user} className="User-logo" alt="user" />
          <span>Prénom Nom</span>
        </li></a>
        <a href="/profil/patient"><li>
          <img src={user} className="User-logo" alt="user" />
          <span>Prénom Nom</span>
        </li></a>
        </ul>
        </Row>
      </Container>
    );
  }
}

export default ProfilPro;
