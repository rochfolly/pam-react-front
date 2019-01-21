import React, { Component } from 'react';
import { Container, Row, Col, Button, FormGroup, Input, Label} from 'reactstrap';
import './JeuImage.css'
import game from '../Images/dice.png'
import axios from 'axios';

var answerTab = {0:{src:"",rep:""},1:{src:"",rep:""},2:{src:"",rep:""},3:{src:"",rep:""},4:{src:"",rep:""},
5:{src:"",rep:""},6:{src:"",rep:""},7:{src:"",rep:""},8:{src:"",rep:""},9:{src:"",rep:""}}


class JeuImage extends Component {

    constructor(props){
        super(props);
        this.state = {question:0, 
            lien:'images/0.png',
            word1:'A', word2:'B', word3:'C', word4:'D', word5:'E',
            reponse:'', answer:'null'}

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit() {
        this.setState({
            lien: this.state.reponse[this.state.question+1].src,
            word1: this.state.reponse[this.state.question+1].word_1,
            word2: this.state.reponse[this.state.question+1].word_2,
            word3: this.state.reponse[this.state.question+1].word_3,
            word4: this.state.reponse[this.state.question+1].word_4,
            word5: this.state.reponse[this.state.question+1].word_5 
        })
        this.setState({question: this.state.question+1})
        answerTab[this.state.question].src = this.state.reponse[this.state.question].src
        answerTab[this.state.question].rep = this.state.answer

        if(answerTab[9].src!==""){
            axios.post("https://pampfe.azurewebsites.net/exo2/scoring",{answerTab})
            .then(res => {
              console.log(res.data)
            })
        }
    }

    handleChange(event) {
        this.setState({ answer: event.target.value })
    }
    
    componentDidMount(){
        const gameurl = "https://pampfe.azurewebsites.net/exo2"
        axios.post(gameurl)
        .then(res => {
            this.setState({ reponse: res.data,
                lien: res.data[this.state.question].src,
                 word1: res.data[this.state.question].word_1,
                 word2: res.data[this.state.question].word_2,
                 word3: res.data[this.state.question].word_3,
                 word4: res.data[this.state.question].word_4,
                 word5: res.data[this.state.question].word_5, })
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
            <Col sm={{size: 3, offset:3}} className="jeuImg">
                <img height="300" width="300" src={require(`./../Images/${this.state.lien}`)} className="imgExo"></img>
            </Col>
            <Col sm={{size: 3, offset:1}}>
                <Row>
                    <Label check className="jeuSol" >
                    <Input type="radio" checked={this.state.answer === this.state.word1} value={this.state.word1} onChange={this.handleChange}/>{this.state.word1}
                    </Label>
                </Row>
                <Row>
                    <Label check className="jeuSol">
                    <Input type="radio" checked={this.state.answer === this.state.word2} value={this.state.word2} onChange={this.handleChange}/>{this.state.word2}
                    </Label>
                </Row>
                <Row>
                    <Label check className="jeuSol">
                    <Input type="radio" checked={this.state.answer === this.state.word3} value={this.state.word3} onChange={this.handleChange}/>{this.state.word3}
                    </Label>
                </Row>
                <Row>
                    <Label check className="jeuSol">
                    <Input type="radio" checked={this.state.answer === this.state.word4} value={this.state.word4} onChange={this.handleChange}/>{this.state.word4}
                    </Label>
                </Row>
                <Row>
                    <Label check className="jeuSol">
                    <Input type="radio" checked={this.state.answer === this.state.word5} value={this.state.word5} onChange={this.handleChange}/>{this.state.word5}
                    </Label>
                </Row>
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
