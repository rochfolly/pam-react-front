import React, { Component } from 'react';
import mysql from 'mysql';
import logo from '../../Images/logoPAM.png';
import './Inscription.css';
import { Container, Row, Col, Form, FormGroup, Button, Input, Label } from 'reactstrap';
import { Route } from 'react-router-dom';
import ProfilPro from '../Profil/Profil.js';

//import {connection} from '..../pam-node-api/database/config/connection'
//import { Doctor } from '..../pam-node-api/database/tables/doctor'
//modules bdd
/*const express = require('express');
const cors = require('cors');
const app = express();

//connexion à la bdd


const connexion = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'pam'
});

connexion.connect() */

class Inscription extends Component {
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

     const doctor = {
        firstname: this.state.first_name,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        job: this.state.job,
        city: this.state.city,
        phone: this.state.phone
     }
    //const NEW_DOCTOR_QUERY = 'INSERT into doctor SET prenom = ?, nom = ?, email = ?, password = ?, domaine = ?, ville = ?, phone = ?, date_insciption = ?'

    //connection.query(NEW_DOCTOR_QUERY,
    //  [doctor.firstName, doctor.name, doctor.email, doctor.password, doctor.job, doctor.city, doctor.phone, new Date()])
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
        <p> Bienvenue ! Veuillez remplir les champs suivants pour créer votre compte : </p>
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
              <Label for="job" sm={1}>Profession</Label>
                <Col sm={4}>
                  <Input type="text" value={this.state.job} name="job" id="job" placeholder="Orthophoniste" onChange={this.handleChange} required/>
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

export default Inscription;
