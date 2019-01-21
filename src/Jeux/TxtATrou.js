import React, { Component } from 'react';
import { Container, Row, Col, Button, FormGroup, Input } from 'reactstrap';
import './TxtATrou.css'
import game from '../Images/dice.png'
import axios from 'axios';
//import { getPhrase } from '../utils/API'
const headers = {'Content-Type': 'application/json'}

class TxtATrou extends Component {

    constructor(props){
        super(props);
        this.state = {question:0, part1:'', part2:''}
    }
    
    componentDidMount(){
        const gameurl = "https://pfepam.azurewebsites.net/exo1"
        axios.post(gameurl) 
        .then(res => {
            console.log(res.data.part1)
            console.log(res.data.part2)
            this.setState({part1: res.data.part1,
                            part2: res.data.part2 })
            })        
    }

    //Utile si on reçoit direct toutes les phrases
    // componentDidMount(){
    //     const phrases=["phrase_1","phrase_2","phrase_3","phrase_4","phrase_5"
    //         ,"phrase_6","phrase_7","phrase_8","phrase_9","phrase_10"]
    //     const gameurl = "https://pfepamapi.azurewebsites.net/exo1"
    //     axios.post(gameurl)
    //     .then(res => {
    //         console.log(res.data[phrases[this.state.question]].part1)
    //         console.log(res.data[images[this.state.question]].part2)
    //         this.setState({part1: res.data[phrases[this.state.question]].part1,
    //         part2: res.data[phrases[this.state.question]].part2 })
    //         })        
    // }

    

  render() {
      
    return (
      <Container>
      <br/>
        <Row>
        <Col sm={{size: 10}}>
            <Row>
                <Col sm="6"><h3 className="titlePAM">Texte à trous</h3></Col>            
                <Col sm="6"><h6 className="exNumber titlePAM">Exercice 1/5</h6></Col>
            </Row>
            <Row><h5 className="sous-titre">Quel est le mot manquant de cette phrase ?</h5></Row>            
        </Col>
        <Col sm={{size: 1, offset:1}}><img src={game} alt="jeu" className="txtATrouLogo"/></Col>
        </Row>
        <br/><br/>
        <div id="phrase">
            <FormGroup row>
                <Col sm={{size: 6, offset:3}}>
                <h2>{this.state.part1}
                <Input type="text" id="trou" size="8" placeholder="________________"/>
                {this.state.part2}</h2>
                </Col>
            </FormGroup>
        </div>
        <br/>
        <div id="niv1" style={{display:"none"}}>
            <Row>
                <Col sm={{size:2, offset:4}}><Button className="rep" id="rep1">phrases</Button></Col>
                <Col sm={{size:2, offset:1}}><Button className="rep" id="rep2">mots</Button></Col>
            </Row>
            <Row>
                <Col sm={{size:2, offset:4}}><Button className="rep" id="rep3">lapins</Button></Col>
                <Col sm={{size:2, offset:1}}><Button className="rep" id="rep4">boissons</Button></Col>
            </Row>
        </div>
        <Row>
            <Col sm={{size: 4}}><Button className="footerLeft"><a href="/user">Quitter</a></Button></Col>
            <Col sm={{size: 4}}><Button className="footerRight">Valider</Button></Col>
        </Row>
      </Container>
    );
  }
}

export default TxtATrou;
