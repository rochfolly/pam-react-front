import React, { Component } from 'react';
import logo from '../Images/logoPAM.png';
import './Accueil.css';
import { Container, Row, Col, Form, FormGroup, Button, Input } from 'reactstrap';
import { login } from '../utils/API';


class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
   event.preventDefault();

    const user = {
      email : this.state.email,
      password : this.state.password
    }
    
    login(user).then(res => {
      const id = res.type.id
      window.location = (res.type.is_doctor) ? "/profil/"+id : "/user/"+id
      
    })
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
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row >
                <Col sm={12}>
                  <Input type="email" value={this.state.email} name="email" id="email" placeholder="Email" onChange={this.handleChange} required={true}/>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={12}>
                  <Input type="password" value={this.state.password} name="password" id="password" placeholder="Mot de passe" onChange={this.handleChange} required={true}/>
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col>
                  <br/>
                  <Button type="submit">Submit</Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>

        <Row className="footerAccueil">
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
