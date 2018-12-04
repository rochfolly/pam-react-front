import React, { Component } from 'react';
import { Container, Row, Col,
  Form, FormGroup, Button, Input, Label,
  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ProfilPatient.css';
import ExercicePatient from './ExercicePatient/ExercicePatient'
import ChoixExercice from './AjoutPatient/ChoixExercice/ChoixExercice'

class ProfilPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggleProfil = this.toggleProfil.bind(this);
    this.toggleExercices = this.toggleExercices.bind(this);
  }

  toggleProfil() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleExercices() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 6}}><h3 class="titlePAM">Profil de <span id="user">Prénom Nom</span></h3></Col>
        <Col sm={{size:2}}>
          <Button onClick={this.toggleExercices}>Accès aux exercices</Button>
        </Col>
        <Col sm={{size:2}}>
          <Button onClick={this.toggleProfil}>Accès au profil global</Button>
        </Col>
        </Row>
        <br/>
        <Row>
        <small class="sous-titre">Cliquez sur un jeu pour visualiser la progression d'un patient</small>
        </Row>
        <br/>
        <Row>
        <Col sm="6"><ExercicePatient /></Col>
        <Col sm="6"><ExercicePatient /></Col>
        </Row>
        <br/>
        <Row>
        <Col sm="6"><ExercicePatient /></Col>
        <Col sm="6"><ExercicePatient /></Col>
        </Row>
        <br/>


        <Modal isOpen={this.state.modal} toggle={this.toggleProfil} className={this.props.className}>
          <ModalHeader toggle={this.toggleProfil}>Profil global</ModalHeader>
          <ModalBody>
            Appeler ici un composant avec le graphe en araignée des stat du patient
          </ModalBody>
        </Modal>

        <Modal isOpen={this.state.modal} size="lg" toggle={this.toggleExercices} className={this.props.className}>
          <ModalHeader toggle={this.toggleExercices}>Modifier l'accès aux exercices</ModalHeader>
          <ModalBody>
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
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggleExercices}>Valider</Button>{' '}
            <Button onClick={this.toggleExercices}>Annuler</Button>
          </ModalFooter>
        </Modal>

      </Container>
    );
  }
}

export default ProfilPatient;
