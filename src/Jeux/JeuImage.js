import React, { Component } from 'react';
import { Container, Row, Col, Button, FormGroup, Input, Label} from 'reactstrap';
import './JeuImage.css'
import game from '../Images/jeuImage.png'
import axios from 'axios';

var answerTab = {"niv": null, 
                "0":{src:"",rep:""},"1":{src:"",rep:""},"2":{src:"",rep:""},
                "3":{src:"",rep:""},"4":{src:"",rep:""},"5":{src:"",rep:""},
                "6":{src:"",rep:""},"7":{src:"",rep:""},"8":{src:"",rep:""},"9":{src:"",rep:""}}

var niveau = {"niv": null}
//Niv 1 = 5 mots très différents
//Niv 2 = 5 mots similaires
//Niv 3 = 1 input à remplir

class JeuImage extends Component {

    constructor(props){
        super(props);
        this.state = {question:0, niv: 3,
            lien:'images/0.png',
            word1:'', word2:'', word3:'', word4:'', word5:'',
            reponse:'', answer:''}

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.isLastLevel = this.isLastLevel.bind(this)
    }

    handleSubmit() {
        if(this.state.question<9)
        {
            answerTab[this.state.question].src = this.state.reponse[this.state.question].src
            answerTab[this.state.question].rep = this.state.answer
            this.setState({
                lien: this.state.reponse[this.state.question+1].src,
                word1: this.state.reponse[this.state.question+1].word_1,
                word2: this.state.reponse[this.state.question+1].word_2,
                word3: this.state.reponse[this.state.question+1].word_3,
                word4: this.state.reponse[this.state.question+1].word_4,
                word5: this.state.reponse[this.state.question+1].word_5 
            }, ()=>{
                    this.setState({question: this.state.question+1,
                    answer: ''}, ()=>{
                        console.log(this.state.question)
                    })
                }    
            )       
        }
        else {
            answerTab[this.state.question].src = this.state.reponse[this.state.question].src
            answerTab[this.state.question].rep = this.state.answer

            const tab = JSON.stringify(answerTab)
            console.log(tab)
                axios("https://pfepam.azurewebsites.net/exo2/scoring",
                {method: 'POST', data: tab, header: {"Content-Type": "application/json"}})
               .then(res => {
                   console.log(res.data)
                   const finaltab = JSON.stringify(res.data)
                   localStorage.setItem("resultat", finaltab)
                   console.log("item créé")  
                   console.log(finaltab)   
                   console.log(localStorage.getItem("resultat"))             
                })
                window.location = '/user/result'           
        }
        console.log(JSON.stringify(answerTab))
    }

    handleChange(event) {
        this.setState({ answer: event.target.value })
    }

    isLastLevel() {
        if (this.state.niv === 3) {
            var lvl = true
        } else 
        {
            lvl = false
        }
        return lvl
    }
    
    componentDidMount() {
        niveau.niv = this.state.niv
        axios("https://pfepam.azurewebsites.net/exo2",
                {method: 'POST', data: niveau, header: {"Content-Type": "application/json"}})
        .then(res => {
            console.log(res.data)
            this.setState({ reponse: res.data,
            lien: res.data[this.state.question].src,
            word1: res.data[this.state.question].word_1,
            word2: res.data[this.state.question].word_2,
            word3: res.data[this.state.question].word_3,
            word4: res.data[this.state.question].word_4,
            word5: res.data[this.state.question].word_5 })
            })  
    }

  render() {
    

    return (
      <Container>
      <br/>
        <Row>
        <Col sm="10">
            <Row>
                <Col sm={{size: 6}}><h3 className="titlePAM">Jeu d'image</h3></Col>
                <Col sm={{size: 6}}><h6 className="exNumber titlePAM">Exercice {this.state.question+1}/10</h6></Col>
            </Row>
            <Row><h5 className="sous-titre">A quel mot correspond cette image ?</h5></Row>
        </Col>
        <Col sm={{size: 1, offset:1}}><img src={game} alt="jeu" className="jeuImageLogo"/></Col>
        </Row>
        <FormGroup check>
        <Row>
            <Col sm={{size: 3, offset:3}}>
                <img height="300" width="300" alt="" src={require(`./../Images/${this.state.lien}`)} className="imgExo"></img>
            </Col>
            <Col sm={{size: 3, offset:1}} className="solutions" >
            <div style={{display: this.isLastLevel() ? "none": "block"}}>
                <Row>
                    <Label check className="jeuSol" >
                    <Input type="radio" className="radio-btn" checked={this.state.answer === this.state.word1} value={this.state.word1} onChange={this.handleChange}/>{this.state.word1}
                    <span className="checkmark"></span></Label>
                </Row>
                <Row>
                    <Label check className="jeuSol">
                    <Input type="radio" checked={this.state.answer === this.state.word2} value={this.state.word2} onChange={this.handleChange}/>{this.state.word2}
                    <span className="checkmark"></span></Label>
                </Row>
                <Row>
                    <Label check className="jeuSol">
                    <Input type="radio" checked={this.state.answer === this.state.word3} value={this.state.word3} onChange={this.handleChange}/>{this.state.word3}
                    <span className="checkmark"></span></Label>
                </Row>
                <Row>
                    <Label check className="jeuSol">
                    <Input type="radio" checked={this.state.answer === this.state.word4} value={this.state.word4} onChange={this.handleChange}/>{this.state.word4}
                    <span className="checkmark"></span></Label>
                </Row>
                <Row>
                    <Label check className="jeuSol">
                    <Input type="radio" checked={this.state.answer === this.state.word5} value={this.state.word5} onChange={this.handleChange}/>{this.state.word5}
                    <span className="checkmark"></span></Label>
                </Row>
            </div>
            <div style={{display: this.isLastLevel() ? "block": "none"}}>
            <br/><br/><br/><br/>
            <Input type="text" name="answer" id="trou" 
                value={this.state.answer} placeholder="________________" 
                onChange={this.handleChange} style={{width: "100%"}}/>
            </div>
            </Col>
        </Row>
        </FormGroup>
        <Row>
            <Col sm={{size: 4}}><Button className="footerLeft"><a href="/user">Quitter</a></Button></Col>
            <Col sm={{size: 4}}><Button onClick={this.handleSubmit} className="footerRight">Valider</Button></Col>
        </Row>
        
      </Container>
    );
  }
}

export default JeuImage;
