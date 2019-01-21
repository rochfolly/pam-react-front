import React, { Component } from 'react';
import { Container, Row, Col, Button, FormGroup, Input } from 'reactstrap';
import './TxtATrou.css'
import game from '../Images/dice.png'
import axios from 'axios';

var answerTab = {0:{part1:"",part2:"",rep:""},1:{part1:"",part2:"",rep:""},2:{part1:"",part2:"",rep:""},
                3:{part1:"",part2:"",rep:""},4:{part1:"",part2:"",rep:""}}

class TxtATrou extends Component {

    constructor(props){
        super(props);
        this.state = {question:0, part1:'', part2:'',
        reponse:'', answer:'', email:''}
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit() {
        this.setState({
            part1: this.state.reponse[this.state.question+1].part1, 
            part2: this.state.reponse[this.state.question+1].part2,
        })
        this.setState({question: this.state.question+1})

        answerTab[this.state.question].part1 = this.state.reponse[this.state.question].part1
        answerTab[this.state.question].part2 = this.state.reponse[this.state.question].part2
        answerTab[this.state.question].rep = this.state.answer
        this.setState({answer: ''})

        if(answerTab[4].rep!==""){
            axios.post("https://pfepam.azurewebsites.net/exo1/scoring",{answerTab})
            .then(res => {
              console.log(res.data)
            })
        }
        console.log(answerTab)
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    componentDidMount(){
        const gameurl = "https://pfepam.azurewebsites.net/exo1"
        axios.post(gameurl) 
        .then(res => {
            this.setState({reponse: res.data,
                part1: res.data[this.state.question].part1,
                part2: res.data[this.state.question].part2 })
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
                <Col sm="6"><h6 className="exNumber titlePAM">Exercice {this.state.question+1}/5</h6></Col>
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
                <Input type="text" name="answer" id="trou" value={this.state.answer} placeholder="________________" onChange={this.handleChange}/>
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
            <Col sm={{size: 4}}><Button onClick={this.handleSubmit} className="footerRight">Valider</Button></Col>
        </Row>
      </Container>
    );
  }
}

export default TxtATrou;
