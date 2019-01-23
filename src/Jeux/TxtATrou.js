import React, { Component } from 'react';
import { Container, Row, Col, Button, FormGroup, Input, Label } from 'reactstrap';
import './TxtATrou.css'
import game from '../Images/dice.png'
import axios from 'axios';

var answerTab = {"niv":2,
                "0":{part1:"",part2:"",rep:"",repo1:"",repo2:"",repo3:""},
                "1":{part1:"",part2:"",rep:"",repo1:"",repo2:"",repo3:""},
                "2":{part1:"",part2:"",rep:"",repo1:"",repo2:"",repo3:""},
                "3":{part1:"",part2:"",rep:"",repo1:"",repo2:"",repo3:""},
                "4":{part1:"",part2:"",rep:"",repo1:"",repo2:"",repo3:""}}

var niv = { "niv": 2}


class TxtATrou extends Component {

    constructor(props){
        super(props);
        this.state = {question:0, part1:'', part2:'',
                    reponse:'', answer:'', email:'', 
                    rep1:'', rep2:'', rep3:'', rep4:''}
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.getRep = this.getRep.bind(this)
    }

    handleSubmit() {

        answerTab[this.state.question].part1 = this.state.reponse[this.state.question].part1
        answerTab[this.state.question].part2 = this.state.reponse[this.state.question].part2
        answerTab[this.state.question].rep = this.state.answer
        // answerTab[this.state.question].repo1 = this.state.answer
        // answerTab[this.state.question].repo2 = this.state.answer
        // answerTab[this.state.question].repo3 = this.state.answer

        if(this.state.answer === this.state.rep1){
            answerTab[this.state.question].repo1 = this.state.rep2
            answerTab[this.state.question].repo2 = this.state.rep3
            answerTab[this.state.question].repo3 = this.state.rep4
            console.log(answerTab)
        }
        else if(this.state.answer === this.state.rep2){
            answerTab[this.state.question].repo1 = this.state.rep1
            answerTab[this.state.question].repo2 = this.state.rep3
            answerTab[this.state.question].repo3 = this.state.rep4
            console.log(answerTab)
        }
        else if(this.state.answer === this.state.rep3){
            answerTab[this.state.question].repo1 = this.state.rep1
            answerTab[this.state.question].repo2 = this.state.rep2
            answerTab[this.state.question].repo3 = this.state.rep4
            console.log(answerTab)
        }
        else if(this.state.answer === this.state.rep4){
            answerTab[this.state.question].repo1 = this.state.rep1
            answerTab[this.state.question].repo2 = this.state.rep2
            answerTab[this.state.question].repo3 = this.state.rep3
            console.log(answerTab)
        }
        else {
            answerTab[this.state.question].repo1 = this.state.rep1
            answerTab[this.state.question].repo2 = this.state.rep2
            answerTab[this.state.question].repo3 = this.state.rep3
            console.log(answerTab)   
        }

        if(this.state.question<4)
        {
            this.setState({
                part1: this.state.reponse[this.state.question+1].part1, 
                part2: this.state.reponse[this.state.question+1].part2,
                rep1: this.state.reponse[this.state.question+1].rep1,
                rep2: this.state.reponse[this.state.question+1].rep2,
                rep3: this.state.reponse[this.state.question+1].rep3,
                rep4: this.state.reponse[this.state.question+1].rep4,
            }, ()=>{
                    this.setState({question: this.state.question+1, 
                    answer: ''}, ()=>{
                        console.log(this.state.question)
                    })
                }
            )  
        }
        else {
            
            const tab = JSON.stringify(answerTab)
            console.log(tab)
                axios("https://pfepam.azurewebsites.net/exo1/scoring",
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

    getRep = rep_id => {
        const rep = "this.state.rep" + rep_id
        return rep
    }
    getRepo = repo_id => {
        const repo = "repo" + repo_id
        return repo
    }
    

    componentDidMount(){
        axios("https://pfepam.azurewebsites.net/exo1",
                {method: 'POST', header: {"Content-Type": "application/json"}})
        .then(res => {
            console.log(res.data)
            this.setState({reponse: res.data,
                part1: res.data[this.state.question].part1,
                part2: res.data[this.state.question].part2,
                rep1: res.data[this.state.question].rep1,
                rep2: res.data[this.state.question].rep2,
                rep3: res.data[this.state.question].rep3,
                rep4: res.data[this.state.question].rep4})
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
        <div id="niv1" style={{display:"block"}} className="solutions">
            <Row>
                <Col sm={{size:3, offset:4}}>
                    <Label check className="jeuSol" >
                    <Input type="radio" className="radio-btn" checked={this.state.answer === this.state.rep1} value={this.state.rep1} onChange={this.handleChange}/>{this.state.rep1}
                    <span className="checkmark"></span></Label>
                </Col>
                <Col sm={{size:3}}>
                <Label check className="jeuSol" >
                    <Input type="radio" className="radio-btn" checked={this.state.answer === this.state.rep2} value={this.state.rep2} onChange={this.handleChange}/>{this.state.rep2}
                    <span className="checkmark"></span></Label>
                </Col>
            </Row>
            <Row>
                <Col sm={{size:3, offset:4}}>
                    <Label check className="jeuSol" >
                    <Input type="radio" className="radio-btn" checked={this.state.answer === this.state.rep3} value={this.state.rep3} onChange={this.handleChange}/>{this.state.rep3}
                    <span className="checkmark"></span></Label>
                </Col>
                <Col sm={{size:3}}>
                <Label check className="jeuSol" >
                    <Input type="radio" className="radio-btn" checked={this.state.answer === this.state.rep4} value={this.state.rep4} onChange={this.handleChange}/>{this.state.rep4}
                    <span className="checkmark"></span></Label>
                </Col>
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



            /*var j=1
            var rep=""
            var repo=""

            for(var i=1;i<5;i++)
            {
                rep = "rep"+i
                repo = "repo"+j
                console.log(this.getRep(i)+" ")
                if(this.state.rep!==this.state.answer)
                {
                    answerTab[this.state.question].repo = this.getRep(i)
                    j++;
                }
                console.log(i+" "+j)
            } */