import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Input, Label} from 'reactstrap';
import './JeuImage.css'
import game from '../Images/exo2.png'
import jwt_decode from 'jwt-decode'
import axios from 'axios';
import { getLevel } from '../utils/API';


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
        this.state = {question:0, exo:2, niv: '',
            lien:'images/0.png', user_id:'',
            word1:'', word2:'', word3:'', word4:'', word5:'',
            reponse:'', answer:''}

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleKeySubmit = this.handleKeySubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.isLastLevel = this.isLastLevel.bind(this)
    }

    handleKeySubmit(event) {
        if(event.key === 'Enter'){
            this.handleSubmit(event)
        }
    }

    handleSubmit(e) {
       
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
            answerTab.niv = this.state.niv

            const tab = JSON.stringify(answerTab)
            console.log(tab)
                axios("https://pfepam.azurewebsites.net/exo2/scoring",
                {method: 'POST', data: tab, header: {"Content-Type": "application/json"}})
               .then(res => {
                    res.data.exo = "Jeu d'image"
                    res.data.exo_id = 2
                    res.data.level = this.state.niv
                    const finaltab = JSON.stringify(res.data)
                    sessionStorage.setItem("resultat", finaltab)  
                    window.location = '/result/'+this.state.user_id           
                })
        }
        console.log(JSON.stringify(answerTab))
        e.preventDefault();
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
        const { user_id } = this.props.match.params
        getLevel(user_id, this.state.exo).then(response => {
        console.log(response.data)
        niveau.niv = response.data.level
        this.setState({niv: niveau.niv}, () => {
            axios("https://pfepam.azurewebsites.net/exo2",
                    {method: 'POST', data: niveau, header: {"Content-Type": "application/json"}})
            .then(res => {
                console.log(res.data)
                this.setState({ reponse: res.data,
                user_id: user_id,
                lien: res.data[this.state.question].src,
                word1: res.data[this.state.question].word_1,
                word2: res.data[this.state.question].word_2,
                word3: res.data[this.state.question].word_3,
                word4: res.data[this.state.question].word_4,
                word5: res.data[this.state.question].word_5 })
                })  
            })
        })
    }

    goBackTo(){
        const token = sessionStorage.usertoken
  
        if(token){
        const decoded = jwt_decode(token)
        const link = "/user/" + decoded.id
        return link
        }
      }

  render() {
    

    return (
      <Container>
      <br/>
        <Row>
        <Col sm="10">
            <Row>
                <Col sm={{size: 6}}><h3 className="titlePAM">Jeu d'image</h3></Col>
                <Col sm={{size: 6}}><h6 className="exNumber titlePAM">Niveau {this.state.niv} - Exercice {this.state.question+1}/10</h6></Col>
            </Row>
            <Row>
                <Col sm={{size: 5, offset:5}}>
                <h5 className="sous-titre" style={{textAlign: "center"}}>A quel mot correspond cette image ?</h5>
                </Col>
            </Row>
        </Col>
        <Col sm={{size: 1, offset:1}}><img src={game} alt="jeu" className="jeuImageLogo"/></Col>
        </Row>
        <Form onSubmit={this.handleSubmit}>
        <FormGroup check>
        <Row>
            <Col sm={{size: 3, offset:3}}>
                <img height="300" width="300" alt="" src={require(`./../Images/${this.state.lien}`)} className="imgExo"></img>
            </Col>
            <Col sm={{size: 3, offset:1}} className="solutions" >
            <div style={{display: this.isLastLevel() ? "none": "block"}}>
                <Row>
                    <Label check className="jeuSol" >
                    <Input onKeyPress={this.handleKeySubmit} type="radio" className="radio-btn" checked={this.state.answer === this.state.word1} value={this.state.word1} onChange={this.handleChange} required={!this.isLastLevel()}/>{this.state.word1}
                    <span className="checkmark"></span></Label>
                </Row>
                <Row>
                    <Label check className="jeuSol">
                    <Input onKeyPress={this.handleKeySubmit} type="radio" checked={this.state.answer === this.state.word2} value={this.state.word2} onChange={this.handleChange}/>{this.state.word2}
                    <span className="checkmark"></span></Label>
                </Row>
                <Row>
                    <Label check className="jeuSol">
                    <Input onKeyPress={this.handleKeySubmit} type="radio" checked={this.state.answer === this.state.word3} value={this.state.word3} onChange={this.handleChange}/>{this.state.word3}
                    <span className="checkmark"></span></Label>
                </Row>
                <Row>
                    <Label check className="jeuSol">
                    <Input onKeyPress={this.handleKeySubmit} type="radio" checked={this.state.answer === this.state.word4} value={this.state.word4} onChange={this.handleChange}/>{this.state.word4}
                    <span className="checkmark"></span></Label>
                </Row>
                <Row>
                    <Label check className="jeuSol">
                    <Input onKeyPress={this.handleKeySubmit} type="radio" checked={this.state.answer === this.state.word5} value={this.state.word5} onChange={this.handleChange}/>{this.state.word5}
                    <span className="checkmark"></span></Label>
                </Row>
            </div>
            <div style={{display: this.isLastLevel() ? "block": "none"}}>
            <br/><br/><br/><br/>
            <Input onKeyPress={this.handleKeySubmit} 
                type="text" name="answer" id="trou" 
                value={this.state.answer} placeholder="________________" 
                onChange={this.handleChange} style={{width: "100%"}} required={this.isLastLevel()}/>
            </div>
            </Col>
        </Row>
        </FormGroup>
        <Row>
            <Col sm={{size: 4}}><Button type="submit" className="footerRight">Valider</Button></Col>
        </Row>
        </Form>
        <Button className="footerLeft"><a href={this.goBackTo()}>Quitter</a></Button>


        
      </Container>
    );
  }
}

export default JeuImage;
