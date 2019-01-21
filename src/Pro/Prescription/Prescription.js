import React, { Component } from 'react';
import logo from '../../Images/logoPAM.png';
import './Inscription.css';
import { Container, Row, Col, Form, FormGroup, Button, Input, Label } from 'reactstrap';
import { signup } from '../../utils/API';


class Prescription extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', firstname:'', mail: '', password:'', conf:'', job:'', city:'', phone:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   
  handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
 
    
  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state.firstname)

     const newDoctor = {
        firstname: this.state.firstname,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        job: this.state.job,
        city: this.state.city,
        phone: this.state.phone
     }
     
     signup(newDoctor)

    //window.location = "/profil"
  }
  
  /*testAxios = event => {
    const working = 'axios marche!'
    test(working)
  }*/


  render() {
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 2}}><h3 class="titlePAM">Prescription</h3></Col>
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
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
              <Label for="name" sm={1}>Nom*</Label>
                <Col sm={4}>
                  <Input type="text" value={this.state.name} name="name" id="name" placeholder="Nom" onChange={this.handleChange} required/>
                </Col>
                <Label for="firstname" sm={{size:1, offset:1}}>Prénom*</Label>
                <Col sm={4}>
                  <Input type="text" value={this.state.firstname} name="firstname" id="firstname" placeholder="Prénom" onChange={this.handleChange} required/>
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
              <Label for="job" sm={1}>Profession</Label>
                <Col sm={4}>
                  <Input type="select" value={this.state.job} name="job" id="job" placeholder="Orthophoniste" onChange={this.handleChange} required>
                    <option>Orthophoniste</option>
                    <option>Autre</option>
                  </Input>
                </Col>
                <Label for="city" sm={{size:1, offset:1}}>Ville</Label>
                <Col sm={4}>
                  <Input type="text" value={this.state.city} name="city" id="city" placeholder="Paris" onChange={this.handleChange} required/>
                </Col>
              </FormGroup>
              <FormGroup row>
              <Label for="phone" sm={1}>Téléphone</Label>
                <Col sm={4}>
                  <Input type="phone" value={this.state.phone} name="phone" id="phone" placeholder="0102030405" onChange={this.handleChange} required/>
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{size:1, offset:10}}>
                  <Button type="submit">Submit</Button>
                </Col>
                </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Prescription;