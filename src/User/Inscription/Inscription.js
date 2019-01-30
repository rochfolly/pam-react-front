import React, { Component } from 'react';
import logo from '../../Images/logoPAM.png';
import './Inscription.css';
import { Container, Row, Col, Form, FormGroup, Button, Input, Label } from 'reactstrap';

class UserInscription extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', firstName:'', mail: '', password:'', conf:'', job:'', city:'', phone:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
        this.setState({ [event.target.name]: event.target.value })
    }

  handleSubmit(event) {
    event.preventDefault();

    //  const doctor = {
    //     firstname: this.state.first_name,
    //     name: this.state.name,
    //     email: this.state.email,
    //     password: this.state.password,
    //     job: this.state.job,
    //     city: this.state.city,
    //     phone: this.state.phone
    //  }
    alert('An account was submitted: \n' + this.state.name + '\n' + this.state.job);
  }


  render() {
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 2}}><h3 class="titlePAM">Inscription</h3></Col>
        <Col sm={{size: 2, offset: 7}}><img src={logo} className="Inscription-logo" alt="logoPAM" /></Col>
        </Row>
        <Row>
        <Col>
        <p> Bienvenue ! Veuillez remplir les champs suivants pour finaliser votre inscription : </p>
        <small>Les champs * sont obligatoires</small>
        </Col>
        </Row>
        <br/>
        <Row>
        <Col>
            <Form noValidate>
              <FormGroup row>
              <Label for="name" sm={1}>Nom*</Label>
                <Col sm={4}>
                  <Input type="text" value={this.state.name} name="name" id="name" placeholder="Nom" onChange={this.handleChange} required/>
                </Col>
                <Label for="firstname" sm={{size:1, offset:1}}>Prénom*</Label>
                <Col sm={4}>
                  <Input type="text" value={this.state.firstname} name="firstName" id="firstName" placeholder="Prénom" onChange={this.handleChange} required/>
                </Col>
              </FormGroup>
              <FormGroup row>
              <Label for="password" sm={1}>Mot de passe*</Label>
                <Col sm={4}>
                  <Input type="password" value={this.state.password} name="password" id="password" placeholder="Mot de passe" onChange={this.handleChange} required/>
                </Col>
                <Label for="conf" sm={{size:2}}>Confirmation du mot de passe*</Label>
                <Col sm={4}>
                  <Input type="password" value={this.state.conf} name="conf" id="conf" onChange={this.handleChange} required/>
                </Col>
              </FormGroup>
              <FormGroup row>
              <Label for="email" sm={1}>Email*</Label>
                <Col sm={4}>
                  <Input type="email" value={this.state.email} name="email" id="email" placeholder="exemple@gmail.com" onChange={this.handleChange} required/>
                </Col>
              </FormGroup>
              <br/>
              <br/>
              <FormGroup row>
              <Label for="sexe" sm={1}>Sexe</Label>
                <Col sm={4}>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="sexe" value="M"/>{' '}Homme
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="sexe" value="W" />{' '}Femme
                    </Label>
                  </FormGroup>
                </Col>
                <Label for="city" sm={{size:1, offset:1}}>Ville</Label>
                <Col sm={4}>
                  <Input type="text" value={this.state.city} name="city" id="city" placeholder="Paris" onChange={this.handleChange}/>
                </Col>
              </FormGroup>
              <FormGroup row>
              <Label for="birth" sm={1}>Date de naissance</Label>
                <Col sm={4}>
                  <Input type="date" name="birth" id="birth" onChange={this.handleChange}/>
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{size:1, offset:10}}>
                  <Button onClick={this.handleSubmit}>Submit</Button>
                </Col>
                </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserInscription;
