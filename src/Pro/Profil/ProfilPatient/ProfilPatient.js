import React, { Component } from 'react';
import { Container, Row, Col,
  Form, FormGroup, Button, Input, Label,
  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ProfilPatient.css';
import ExercicePatient from '../ExercicePatient/ExercicePatient'

class ProfilPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Profil de <span id="user">Prénom Nom</span></h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><a href="/profil">
        <h2><i class="fa fa-arrow-left"></i></h2>
        </a></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><h2><i class="fa fa-power-off"></i></h2></Button></Col>
        </Row>
        <br/>
        <Row>
        <Col sm="2"></Col>
        <Col sm={{size:4}}>
          <Button><a href="/profil/patient/exercices">Modifier l'accès aux exercices</a></Button>
        </Col>
        <Col sm={{size:4}}>
          <Button><a href="/profil/patient/global">Voir les statistiques globales</a></Button>
        </Col>
        </Row>
        <br/>
        <Row>
        <small class="sous-titre">Cliquez sur un jeu pour visualiser la progression d'un patient</small>
        </Row>
        <br/>
        <Row>
        <Col onClick={this.toggle} sm="6"><ExercicePatient /></Col>
        <Col onClick={this.toggle} sm="6"><ExercicePatient /></Col>
        </Row>
        <br/>
        <Row>
        <Col onClick={this.toggle} sm="6"><ExercicePatient /></Col>
        <Col onClick={this.toggle} sm="6"><ExercicePatient /></Col>
        </Row>
        <br/>

        <Modal isOpen={this.state.modal} size="lg" toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Statistiques du jeu TITRE</ModalHeader>
          <ModalBody>
          <Row><Col>Line ou bar chart des stat de l'exo</Col></Row>
          </ModalBody>
        </Modal>

      </Container>
    );
  }
}

export default ProfilPatient;
