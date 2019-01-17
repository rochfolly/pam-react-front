import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Button, Input, Label,
    Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';

class Settings extends Component {

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
                    <Input type="email" value={this.state.email} name="email" id="email" onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <br/>
                <br/>
                <FormGroup row>
                <Label for="job" sm={2}>Profession</Label>
                    <Col sm={4}>
                    <Input type="select" value={this.state.job} name="job" id="job" onChange={this.handleChange}>
                        <option>Orthophoniste</option>
                        <option>Autre</option>
                    </Input>
                    </Col>
                    <Label for="city" sm={{size:2}}>Ville</Label>
                    <Col sm={4}>
                    <Input type="text" value={this.state.city} name="city" id="city" onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="phone" sm={2}>Téléphone</Label>
                    <Col sm={4}>
                    <Input type="phone" value={this.state.phone} name="phone" id="phone" onChange={this.handleChange}/>
                    </Col>
                </FormGroup>            
                </ModalBody>
                <ModalFooter>
                    <FormGroup check>
                        <Button type="submit">Submit</Button>
                    </FormGroup>
                </ModalFooter>
                </Modal>
            </Form>
        </div>
    );
  }
}

export default Settings;

