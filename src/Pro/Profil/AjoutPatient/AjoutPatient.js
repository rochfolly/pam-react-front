import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Button, Input, Label } from 'reactstrap';
import './AjoutPatient.css';
import ChoixExercice from './ChoixExercice/ChoixExercice'
import jwt_decode from 'jwt-decode'
import { createUser } from '../../../utils/API';


class AjoutPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', firstname:'', email: ''};
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
}

  handleSubmit = event => {
    event.preventDefault()

    const token = localStorage.usertoken
    const doctor_id = jwt_decode(token).id

    const newUser = {
      doctor_id : doctor_id,
      firstname : this.state.firstname,
      email : this.state.email,
      password : this.state.firstname
    }
    createUser(newUser)
  }
  
  render() {
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Nouveau patient</h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><a href="/profil"><h2><i class="fa fa-arrow-left"></i></h2></a></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><h2><i class="fa fa-power-off"></i></h2></Button></Col>
        </Row>
        <br/>
        <FormGroup row>
        <Label for="name" sm={1}>Nom*</Label>
          <Col sm={4}>
            <Input value={this.state.name} type="text" name="name" id="name" placeholder="Nom" required/>
          </Col>
          <Label for="firstname" sm={{size:1, offset:1}}>Prénom*</Label>
          <Col sm={4}>
            <Input value={this.state.firstname} type="text" name="firstName" id="firstName" placeholder="Prénom"  required/>
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="email" sm={1}>Email*</Label>
          <Col sm={4}>
            <Input value={this.state.email} type="email" name="email" id="email" placeholder="exemple@gmail.com" required/>
            <small>Un email lui sera envoyé pour terminer l'inscription</small>
          </Col>
        </FormGroup>
        <Row>
        <h3>Exercices accessibles au patient :</h3>
        </Row>
        <br/>
        <Row>
        <Col sm="6"><ChoixExercice /></Col>
        <Col sm="6"><ChoixExercice /></Col>
        </Row>
        <br/>
        <Row>
        <Col sm="6"><ChoixExercice /></Col>
        <Col sm="6"><ChoixExercice /></Col>
        </Row>
        <br/>
        <Row>
        <Col sm={{size:2, offset:10}}>
          <Button>Valider</Button>
        </Col>
        </Row>
      </Container>
    );
  }
}

export default AjoutPatient;
