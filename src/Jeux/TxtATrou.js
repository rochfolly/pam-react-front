import React, { Component } from 'react';
import { Container, Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';
import './TxtATrou.css'
import game from '../Images/dice.png'
import axios from 'axios';
//import { getPhrase } from '../utils/API'
const headers = {'Content-Type': 'application/json'}

class TxtATrou extends Component {

    constructor(props){
        super(props);
        this.state = {phrase:''}
        
    }
    

    componentDidMount(){
        const jeuurl = "http://localhost:5000"
        return axios.get(jeuurl, {headers: headers})
     .then(res => {
        const phrases = new Array(1)
        phrases[0] = res.data 
        console.log(res.data.Phrase)
        this.setState({ phrase: res.data.Phrase })
        })
    }
    

  render() {
      
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}>
            <Row>
                <Col sm="6"><h3 className="titlePAM">Texte à trous</h3></Col>            
                <Col sm="6"><h6 className="exNumber titlePAM">Exercice 1/10</h6></Col>
            </Row>
            <Row><h5 className="sous-titre">Quel est le mot manquant de cette phrase ?</h5></Row>            
        </Col>
        <Col sm={{size: 1, offset:1}}><img src={game} alt="jeu" className="txtATrouLogo"/></Col>
        </Row>
        <br/>
        <div id="phrase">
            <FormGroup row>
                <Label for="trou"><h2>Voici une phrase d'une dizaine de</h2></Label>
                <Input type="text" id="trou" size="8" placeholder="________________"/>
                <h2> stylé non ? et là ça fait environ une quinzaine</h2>
            </FormGroup>
        </div>
        <br/>
        <div id="niv1">
            <Row>
                <Col sm={{size:2, offset:4}}><Button className="rep" id="rep1">phrases</Button></Col>
                <Col sm={{size:2, offset:1}}><Button className="rep" id="rep2">mots</Button></Col>
            </Row>
            <Row>
                <Col sm={{size:2, offset:4}}><Button className="rep" id="rep3">lapins</Button></Col>
                <Col sm={{size:2, offset:1}}><Button className="rep" id="rep4">boissons</Button></Col>
            </Row>
            <Row>
                <Col sm={{size: 4}}><Button className="footerLeft"><a href="/user">Quitter</a></Button></Col>
                <Col sm={{size: 4}}><Button className="footerRight">Valider</Button></Col>
            </Row>
            <Row>
            {this.state.phrase}
            </Row>
        </div>
      </Container>
    );
  }
}

export default TxtATrou;
