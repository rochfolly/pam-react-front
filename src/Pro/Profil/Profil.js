import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import usericon from '../../Images/user.png';
import jwt_decode from 'jwt-decode'
import './Profil.css';
import { fetchUsers } from '../../utils/API'
import Settings from './Settings/Settings'

class ProfilPro extends Component {

  constructor(props) {
    super(props);
    this.state = {id:'', name: '', firstname:'', mail: '', job:'', city:'', users:[], isModalOpen: false};
      
    this.goToProfile = this.goToProfile.bind(this)
    this.logout = this.logout.bind(this)
    this.showModal = this.showModal.bind(this);
    this.toggle = this.toggle.bind(this);
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
 
  componentDidMount () {
   
    const token = sessionStorage.doctortoken
  
    if(token){
      console.log('token:', token)
      const decoded = jwt_decode(token)

      this.setState({id: decoded.id, firstname: decoded.firstname, name: decoded.name, email: decoded.email, job: decoded.job, city: decoded.city})
      console.log('decoded:', decoded)

     fetchUsers(decoded.id).then(res => {
        console.log(res.data)
        this.setState({ users: res.data }, () =>  sessionStorage.setItem("actualDoctor", decoded.id))
      })
    }
    else console.log('No token')

  }

  logout(){
   sessionStorage.clear()
   window.location = '/'
  }

  goToProfile = user_id => {
    const link = "/profil/" +this.state.id+ "/patient/" + user_id
    return link
  }

  goToAjout = doctor_id => {
    const link = "/profil/" + this.state.id + "/ajout"
    return link
  }

  render() {
    const potentialUsers = (this.state.users.length > 0) ? this.state.users.map((user) => 
      <li><a href={this.goToProfile(user[0])} >
       <img src={usericon} className="User-logo" alt="user" />
       <span><b>{user[1]} {user[2]}</b></span>
      </a></li> 
     ) : <h5>Vous n'avez pas encore de patient enregistré</h5>

    const users = (this.state.users) ? potentialUsers : "none"
    console.log(this.state.users)

    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 className="titlePAM">Bienvenue <span id="user">{this.state.firstname}</span></h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton" onClick={this.toggle}><h2><i className="fa fa-cog"></i></h2></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton" onClick={this.logout}><h2><i className="fa fa-power-off"></i></h2></Button></Col>
        </Row>
        <Settings
          isOpen={this.state.isModalOpen}
          toggle={this.toggle}
        />
        <br/><br/>
        <Row>
        <Col sm={{size:4, offset:4}}>
          <Button><a href={this.goToAjout(this.state.id)}>Ajouter un nouveau patient</a></Button>
        </Col>
        </Row>
        <br/><br/>
        <Row>
        <Col>
        <p> Voici la liste de vos patients enregistrés, cliquez dessus pour voir leur profil ! </p>
        </Col>
        </Row>
        <Row>
        <ul className="patients">
           {users}
        </ul>
        </Row>
      </Container>
    );
  }
}

export default ProfilPro;
