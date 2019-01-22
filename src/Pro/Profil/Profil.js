import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import usericon from '../../Images/user.png';
import jwt_decode from 'jwt-decode'
import './Profil.css';
import { fetchUsers, logout } from '../../utils/API'
import Settings from './Settings/Settings'

class ProfilPro extends Component {

  constructor(props) {
    super(props);
    this.state = {name: '', firstname:'', mail: '', job:'', city:'', users:[], isModalOpen: false};
      
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
    const token = localStorage.usertoken
  
    if(token){
      console.log('token exists')
      console.log('token:', token)
      const decoded = jwt_decode(token)

      this.setState({firstname: decoded.firstname, name: decoded.name, email: decoded.email, job: decoded.job, city: decoded.city})
      console.log('decoded:', decoded)

     fetchUsers(decoded.id).then(res => {
        console.log(res.data)
        this.setState({ users: res.data })
      })
    }
    else console.log('No token')

  }

  logout(){
   logout.then(window.location = '/')
  }

  goToProfile = user_id => {
    const link = "/profil/patient/" + user_id
    return link
  }

  render() {
    //href="/profil/patient`"
    const potentialUsers = this.state.users.map((user) => 
      <li><a href={this.goToProfile(user[0])} >
       <img src={usericon} className="User-logo" alt="user" />
       <span><b>{user[1]} {user[2]}</b></span>
      </a></li>
     )

    const users = (this.state.users) ? potentialUsers : "none"
    console.log(this.state.users)

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
        <br/><br/>
        <Row>
        <Col sm={{size:4, offset:4}}>
          <Button><a href="/profil/ajout">Ajouter un nouveau patient</a></Button>
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
