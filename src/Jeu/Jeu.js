import React, { Component } from 'react';
import { Row, Grid, Col } from 'react-bootstrap';
import './App.css';

class Jeu extends Component {
  constructor(props){
  super(props);
  this.pov = null;
  this.state = {nom: null, niveau: 1, description: " ", last: null, score: 0}
  }

  render{
    if(this.props.pov == "pro"){
      return(
        <Row className="row">
          <h3>{this.state.nom}</h3>
          <h4>Niveau : {this.state.niveau}</h4>
          <p>{this.state.description}</p>
          <p>{this.state.last}</p>
          <p>{this.state.score}</p>
        </Row>
      )
    }
    if({this.props.pov} == "patient"){
      return(
        <Row className="row">
          <h3>{this.state.nom}</h3>
          <p>{this.state.last}</p>
          <p>{this.state.score}</p>
        </Row>
      )
    }
  }


}

export default Jeu;
