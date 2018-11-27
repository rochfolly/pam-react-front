import React, { Component } from 'react';
import logo from '../../Images/logoPAM.png';
import './Inscription.css';
import { Container, Row, Col, Form, FormGroup, Button, Input, Label } from 'reactstrap';
import { Route } from 'react-router-dom';
import ProfilPro from '../Profil/Profil.js';




class Inscription extends Component {
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
      <Container>
        <Row>
        <Col sm={{size: 2}}><h3>Inscription</h3></Col>
        <Col sm={{size: 2, offset: 7}}><img src={logo} className="Inscription-logo" alt="logoPAM" /></Col>
        </Row>
        <Row>
        <Col>
        <p> Bienvenue ! Veuillez remplir les champs suivants pour créer votre compte : </p>
        <small>Les champs * sont obligatoires</small>
        </Col>
        </Row>
        <br/>
        <Row>
        <Col>
            <Form>
              <FormGroup row>
              <Label for="name" sm={1}>Nom*</Label>
                <Col sm={4}>
                  <Input type="text" value={this.state.value} name="name" id="name" placeholder="Nom" onChange={this.handleChangeMail} required/>
                </Col>
                <Label for="firstname" sm={{size:1, offset:1}}>Prénom*</Label>
                <Col sm={4}>
                  <Input type="text" value={this.state.value} name="firstName" id="firstName" placeholder="Prénom" onChange={this.handleChangeMail} required/>
                </Col>
              </FormGroup>
              <FormGroup row>
              <Label for="password" sm={1}>Mot de passe*</Label>
                <Col sm={4}>
                  <Input type="password" value={this.state.value} name="password" id="password" placeholder="Mot de passe" onChange={this.handleChangeMail} required/>
                </Col>
                <Label for="conf" sm={{size:2}}>Confirmation du mot de passe*</Label>
                <Col sm={4}>
                  <Input type="password" value={this.state.value} name="conf" id="conf" placeholder="Confirmation" onChange={this.handleChangeMail} required/>
                </Col>
              </FormGroup>
              <FormGroup row>
              <Label for="email" sm={1}>Email*</Label>
                <Col sm={4}>
                  <Input type="email" value={this.state.value} name="email" id="email" placeholder="exemple@gmail.com" onChange={this.handleChangeMail} required/>
                </Col>
              </FormGroup>
              <br/>
              <br/>
              <FormGroup row>
              <Label for="job" sm={1}>Profession</Label>
                <Col sm={4}>
                  <Input type="text" value={this.state.value} name="job" id="job" placeholder="Orthophoniste" onChange={this.handleChangeMail} required/>
                </Col>
                <Label for="city" sm={{size:1, offset:1}}>Ville</Label>
                <Col sm={4}>
                  <Input type="text" value={this.state.value} name="city" id="city" placeholder="Paris" onChange={this.handleChangeMail} required/>
                </Col>
              </FormGroup>
              <FormGroup row>
              <Label for="phone" sm={1}>Téléphone</Label>
                <Col sm={4}>
                  <Input type="phone" value={this.state.value} name="phone" id="phone" placeholder="0102030405" onChange={this.handleChangeMail} required/>
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{size:1, offset:10}}>
                  <Button onClick={this.handleSubmit} >Submit</Button>
                </Col>
                <a href="/pro/profil">Le profil</a>
                </FormGroup>
            </Form>
          </Col>
        </Row>

        <Row>
          <Route path="/pro/profil" component={ProfilPro}/>
        </Row>
      </Container>
    );
  }
}

export default Inscription;
