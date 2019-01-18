import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Button } from 'reactstrap';
import { logout } from '../utils/API';

class Logout extends Component {
  constructor(props){
      super(props);
      this.logout = this.logout.bind(this)
  }

  logout(){
    logout.then(window.location = '/')
  }

  render() {
    return (
        <Col sm={{size: 1}}><Button className ="smallButton" onClick={this.logout}><h2><i class="fa fa-power-off"></i></h2></Button></Col>
    );
  }
}

export default Logout;