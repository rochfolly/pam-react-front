import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './ProfilPatient.css';
import ExercicePatient from '../ExercicePatient/ExercicePatient'
import GraphLineaire from '../../../Graph/GraphLineaire'
//import jwt_decode from 'jwt-decode'
import { showUser, fetchExos } from '../../../utils/API'

class ProfilPatient extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, id: '', user_id:'', firstname:'', name:'', email:'', exos:[]};

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){
    const { user_id } = this.props.match.params
    showUser(user_id).then(res => {
      this.setState({
        id: res.data.doctor_id,
        user_id: user_id,
        firstname: res.data.firstname,
        name: res.data.name,
        email: res.data.email
      })
    })

    fetchExos(user_id).then(res => {
      this.setState({ exos: res.data })
    })
    
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  goBackTo(){
    const link = "/profil/" + this.state.id 
    return link
  }

  goToModif(){
    const link = "/profil/" + this.state.id + "/patient/" + this.state.user_id + "/exercices"
    return link
  }

  goToStats(){
    const link = "/profil/" + this.state.id + "/patient/global/" + this.state.user_id 
    return link
  }

  logout(){
    sessionStorage.clear()
    window.location = '/'
  }
  
  render() {

    //console.log(this.state.exos[0])
    const exercices = this.state.exos.map((exo) => 
    <Col onClick={this.toggle} sm="6"><ExercicePatient exo={exo} /></Col>
    )

    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Profil de <span id="user">{this.state.firstname} {this.state.name}</span></h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><a href={this.goBackTo()}>
        <h2><i class="fa fa-arrow-left"></i></h2>
        </a></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton" onClick={this.logout}><h2><i class="fa fa-power-off"></i></h2></Button></Col>
        </Row>
        <br/>
        <Row>
        <Col sm="2"></Col>
        <Col sm={{size:4}}>
          <Button><a href={this.goToModif()}>Modifier l'accès aux exercices</a></Button>
        </Col>
        <Col sm={{size:4}}>
          <Button><a href={this.goToStats()}>Voir les statistiques globales</a></Button>
        </Col>
        </Row>
        <br/>
        <Row>
        <small class="sous-titre">Cliquez sur un jeu pour visualiser la progression d'un patient</small>
        </Row>
        <br/>
        <Row>
          {exercices}
        </Row>
        <br/>

        <Modal isOpen={this.state.modal} size="lg" toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Statistiques du jeu TITRE</ModalHeader>
          <ModalBody>
          <Row><Col>< GraphLineaire /></Col></Row>
          </ModalBody>
        </Modal>

      </Container>
    );
  }
}

export default ProfilPatient;
