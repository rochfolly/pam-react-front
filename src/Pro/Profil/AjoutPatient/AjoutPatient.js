import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Button, Input, Label, Form } from 'reactstrap';
import './AjoutPatient.css';
import ChoixExercice from './ChoixExercice/ChoixExercice'
import jwt_decode from 'jwt-decode'
import { createUser, mailToUser } from '../../../utils/API';


class AjoutPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {name:'', firstname:'', email:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
}

  handleSubmit = event => {
    event.preventDefault()
    
    const {id} = this.props.match.params

    const newUser = {
      doctor_id : id,
      firstname : this.state.firstname,
      email : this.state.email,
      name : this.state.name
    }
    createUser(newUser)
    .then(res => {
      console.log(res.data)      
      mailToUser(res.data)
      console.log('Email sent to' + res.data.firstname)
      //window.location=this.gotoFirstPrescription(id, res.data.id)
    })
  }

  goBackTo(){
    const {id} = this.props.match.params
    const link = "/profil/" + id 
    return link
  }

  gotoFirstPrescription(doctor_id, user_id){
    const link = "/profil/" + doctor_id + "/ajout/exercices/" + user_id
    return link
  }

  logout(){
    localStorage.clear()
    window.location = '/'
  }
  
  render() {
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Nouveau patient</h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><a href={this.goBackTo()}><h2><i class="fa fa-arrow-left"></i></h2></a></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton" onClick={this.logout}><h2><i class="fa fa-power-off"></i></h2></Button></Col>
        </Row>
        <br/>
        <Form>
        <FormGroup row>
        <Label for="name" sm={1}>Nom*</Label>
          <Col sm={4}>
            <Input value={this.state.name} type="text" name="name" id="name" onChange={this.handleChange} placeholder="Nom" required/>
          </Col>
          <Label for="firstname" sm={{size:1, offset:1}}>Prénom*</Label>
          <Col sm={4}>
            <Input value={this.state.firstname} type="text" name="firstname" id="firstname" onChange={this.handleChange} placeholder="Prénom" required/>
          </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="email" sm={1}>Email*</Label>
          <Col sm={4}>
            <Input value={this.state.email} type="email" name="email" id="email" onChange={this.handleChange} placeholder="exemple@gmail.com" required/>
            <small>Un email lui sera envoyé pour terminer l'inscription</small>
          </Col>
        </FormGroup>
        <br/>

        <Row>
        <Col sm={{size:2, offset:10}}>
          <Button type="submit" onClick={this.handleSubmit}>Suivant</Button>
        </Col>
        </Row>
        </Form>
      </Container>
    );
  }
}

export default AjoutPatient;


/*
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
*/