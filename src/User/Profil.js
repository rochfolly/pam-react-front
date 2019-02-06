import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'reactstrap';
import './Profil.css';
import ChoixExercice from './ChoixExercice/ChoixExercice.js'
import Settings from './Settings/Settings'
import jwt_decode from 'jwt-decode'
import { showUser, fetchExos } from '../utils/API'


class ProfilUser extends Component {

  constructor(props) {
    super(props);
    this.state = {id:'', name: '', firstname:'', mail: '', isModalOpen: false, exos:[]};
  
    this.showModal = this.showModal.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){
      const token = sessionStorage.usertoken
      const { user_id } = this.props.match.params
    
      if(token){
        console.log('usertoken:', token)
        const decoded = jwt_decode(token)  
        //this.setState({id: user_id, firstname: decoded.firstname, name: decoded.name, email: decoded.email})
        console.log('decoded:', decoded)
  
       showUser(user_id).then(res => {
          this.setState({id: user_id, firstname: res.data.firstname, name: res.data.name, email: res.data.email})
        })

        fetchExos(user_id).then(res => {
          console.log(res.data)
          this.setState({exos: res.data}, () => console.log(this.state))
        })
      }
      else console.log('No token')
  
  }

  goTo(page, user_id){
    const link = user_id + "/" + page 
    return link
  }

  toggle() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  showModal() {
    this.setState({
      isModalOpen: true
    });
  }

  logout(){
    sessionStorage.clear()
    window.location = '/'
  }

  render() {

    const exercices = this.state.exos.map((exo) => 
    <Col onClick={this.toggle} sm="6"><ChoixExercice exo={exo} /></Col>
    )

    
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Bienvenue <span id="user">{this.state.firstname}</span></h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton" onClick={this.toggle}><h2><i class="fa fa-cog"></i></h2></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton" onClick={this.logout}><h2><i class="fa fa-power-off"></i></h2></Button></Col>
        </Row>
        <Settings
          isOpen={this.state.isModalOpen}
          toggle={this.toggle}
        />
        <br/>
        <Row>
        <Col sm={{size:3, offset:3}}>
          <Button><a href={this.goTo("statistiques", this.state.id)}>Accéder à votre profil global</a></Button>
        </Col>
        <Col sm={{size:3}}>
          <Button><a href={this.goTo("scores", this.state.id)}>Accéder à vos scores</a></Button>
        </Col>
        </Row>
        <br/>
        <Row>
        <Col>
        <small class="sous-titre">Cliquez sur un jeu pour lancer une partie </small>
        </Col>
        </Row><br/>
        <Row>
         {exercices}
        </Row>
        <br/>

      </Container>
    );
  }
}

export default ProfilUser;
