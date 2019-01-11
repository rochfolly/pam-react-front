import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Button, Input, Label } from 'reactstrap';
import {Glyphicon} from 'react-bootstrap';
import logo from '../../Images/logoPAM.png';
import user from '../../Images/user.png';
import jwt_decode from 'jwt-decode'
import './Profil.css';


class ProfilPro extends Component {

  constructor(props) {
    super(props);
    this.state = {name: '', firstname:'', mail: '', job:'', city:''};
  }

  componentDidMount () {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
        firstname: decoded.firstname,
        name: decoded.name,
        email: decoded.email,
        job: decoded.job,
        city: decoded.city
    })
}


  render() {
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Bienvenue <span id="user">{this.state.firstname}</span></h3></Col>
        <Col sm={{size: 2}}><img src={logo} className="Inscription-logo" alt="logoPAM" /></Col>
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
