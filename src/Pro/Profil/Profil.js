import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import user from '../../Images/user.png';
import jwt_decode from 'jwt-decode'
import './Profil.css';
import { fetchUsers } from '../../utils/API'

const backurl = "http://localhost:8000"

class ProfilPro extends Component {

  constructor(props) {
    super(props);
    this.state = {name: '', firstname:'', mail: '', job:'', city:'', users:""};
  }

  componentDidMount () {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
        firstname: decoded.firstname,
        name: decoded.name,
        email: decoded.email,
        job: decoded.job,
        city: decoded.city
    })

    fetch(backurl + '/doctor/users/' + decoded.id)
      .then(response => response.json())
      .then(data =>{
        this.setState({ users: data })
        })
    /*fetchUsers(decoded.id)
    .then(data => {
      this.setState({users : data})
    })*/
}


  render() {
    /*const users = this.state.users.map((user) => {
      <li><a href="/profil/patient">
       <img src={user} className="User-logo" alt="user" />
       <span>{user.firstname} {user.name}</span>
      </a></li>
     })*/
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}><h3 class="titlePAM">Bienvenue <span id="user">{this.state.firstname}</span></h3></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><h2><i class="fa fa-cog"></i></h2></Button></Col>
        <Col sm={{size: 1}}><Button className ="smallButton"><h2><i class="fa fa-power-off"></i></h2></Button></Col>
        </Row>
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
          {this.state.users}
        </ul>
        </Row>
      </Container>
    );
  }
}

export default ProfilPro;
