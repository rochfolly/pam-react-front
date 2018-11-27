import React, { Component } from 'react';
import logo from '../Images/logoPAM.png';
import './Accueil.css';
import { Container, Row, Col, Form, FormGroup, Button, Input } from 'reactstrap';
import ProfilPro from '../Pro/Profil/Profil.js';
import Inscription from '../Pro/Inscription/Inscription.js';
import { Route } from 'react-router-dom';




class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {mail: '', mdp:''};

    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangeMdp = this.handleChangeMdp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeMail(event) {
    this.setState({mail: event.target.value});
  }

  handleChangeMdp(event) {
    this.setState({mdp: event.target.value});
  }

  handleSubmit(event) {
    alert('An account was submitted: \n' + this.state.mail + '\n' + this.state.mdp);
    event.preventDefault();
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <img src={logo} className="Accueil-logo" alt="logoPAM" />
        </Row>
        <Row>
          <Col sm={{size: 4, offset: 4}} className="blocCentral">
               <h3> Bienvenue ! </h3>
               <p> Veuillez vous identifier : </p><br/>
            <Form>
              <FormGroup row>
                <Col sm={12}>
                  <Input type="email" value={this.state.value} name="email" id="email" placeholder="Email" onChange={this.handleChangeMail}/>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={12}>
                  <Input type="password" value={this.state.value} name="password" id="password" placeholder="Mot de passe" onChange={this.handleChangeMdp} />
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col>
                  <br/>
                  <Button onClick={this.handleSubmit}>Submit</Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>

        <Row className="footer">
          <Col>
          <p>Vous n'avez pas de compte et vous êtes un(e) professionnel(le) de santé ? </p>
            <a href="/inscription"> Créez votre compte ici !</a>
        </Col>
        </Row>
      </Container>
    );
  }
}

export default Accueil;
