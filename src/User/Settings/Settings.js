import React, { Component } from 'react';
import { Col, Form, FormGroup, Button, Input, Label,
    Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import jwt_decode from 'jwt-decode'
import { updateUserSettings } from '../../utils/API'

//const changes = {name: '', firstname:'', email: '', password:'', conf:'', city:''}

class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {id:'', name: '', firstname:'', email: '', password:'', conf:'', city:'', gender:'', birth:''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    const token = sessionStorage.usertoken
  
    if(token){
      console.log('token:', token)
      const decoded = jwt_decode(token)

      this.setState({id: decoded.id, firstname: decoded.firstname, name: decoded.name, 
        email: decoded.email, city: decoded.city, birth: decoded.birth, gender: decoded.gender})
      console.log('decoded:', decoded)

    }
    else console.log('No token')

  }
   
  handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
 
    
  handleSubmit = event => {
    event.preventDefault();
    if(this.state.password === this.state.conf)
    {
      const token =  sessionStorage.usertoken
      console.log(token)
    //   const decoded = jwt_decode(token)

      const news = {
        id: this.state.id,
        firstname: this.state.firstname,
        name: this.state.name,
        password: this.state.password,
        city: this.state.city
      }
    
      updateUserSettings(news).then(window.location = '/user/'+this.state.id)
    }
    else{alert('Veuillez confirmer votre nouveau mot de passe')}
  
  }

  render() {
    return (
        <div>
            
            <Form onSubmit={this.handleSubmit}>
                <Modal
                isOpen={this.props.isOpen}
                toggle={this.props.toggle}
                className={this.props.className}
                size="lg"
                >
                <ModalHeader toggle={this.props.toggle}>Modifiez vos informations</ModalHeader>
                <ModalBody>
                <FormGroup row>
                <Label for="name" sm={2}>Nom</Label>
                    <Col sm={4}>
                    <Input type="text" value={this.state.name} name="name" id="name" onChange={this.handleChange}/>
                    </Col>
                    <Label for="firstname" sm={{size:2}}>Prénom</Label>
                    <Col sm={4}>
                    <Input type="text" value={this.state.firstname} name="firstname" id="firstname" onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="password" sm={2}>Mot de passe</Label>
                    <Col sm={4}>
                    <Input type="password" value={this.state.password} name="password" id="password" onChange={this.handleChange}/>
                    </Col>
                    <Label for="conf" sm={{size:2}}>Confirmation du mot de passe</Label>
                    <Col sm={4}>
                    <Input type="password" value={this.state.conf} name="conf" id="conf" onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="email" sm={2}>Email</Label>
                    <Col sm={4}>
                    <Input type="email" value={this.state.email} name="email" id="email" readonly/>
                    </Col>
                </FormGroup>
                <br/>
                <br/>
                <FormGroup row>
                <Label for="sexe" sm={2}>Sexe</Label>
                    <Col sm={4}>
                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="sexe" value="M" checked={this.state.gender === "H" ? true:false}/>{' '}Homme
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="sexe" value="W" checked={this.state.gender === "F" ? true:false}/>{' '}Femme
                        </Label>
                    </FormGroup>
                    </Col>
                    <Label for="city" sm={{size:2}}>Ville</Label>
                    <Col sm={4}>
                    <Input type="text" value={this.state.city} name="city" id="city" onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="birth" sm={2}>Date de naissance</Label>
                    <Col sm={4}>
                    <Input type="date" value={this.state.birth} name="birth" id="birth" readonly/>
                    </Col>
                </FormGroup>       
                </ModalBody>
                <ModalFooter>
                    <FormGroup check>
                        <Button type="submit" onClick={this.handleSubmit}>Valider</Button>
                    </FormGroup>
                </ModalFooter>
                </Modal>
            </Form>
        </div>
    );
  }
}

export default Settings;


