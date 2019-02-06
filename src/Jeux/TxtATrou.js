import React, { Component } from 'react';
import { Container, Row, Col, Button, 
    Form, FormGroup, Input, Label,
    Modal, ModalBody  } from 'reactstrap';
import './TxtATrou.css'
import game from '../Images/exo1.png'
import jwt_decode from 'jwt-decode'
import axios from 'axios';
import { getLevel, CallTextToSpeech } from '../utils/API';

var answerTab = {"niv": null,
                "0":{part1:"",part2:"",repu:"",rept:""},
                "1":{part1:"",part2:"",repu:"",rept:""},
                "2":{part1:"",part2:"",repu:"",rept:""},
                "3":{part1:"",part2:"",repu:"",rept:""},
                "4":{part1:"",part2:"",repu:"",rept:""}
            }

var niveau = { "niv": null}
//Niv 1 = 4 mots très différents
//Niv 2 = 4 mots similaires
//Niv 3 = 1 input à remplir

class TxtATrou extends Component {

    constructor(props){
        super(props);
        this.state = {niv:'', exo:1, user_id:'', question:0, part1:'', part2:'',
                    reponse:'', answer:'', email:'', 
                    rep1:'', rep2:'', rep3:'', rep4:'',
                    modal: false}
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleKeySubmit = this.handleKeySubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.isLastLevel = this.isLastLevel.bind(this)
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    handleKeySubmit(event) {
        if(event.key === 'Enter'){
            //alert('enter press here! ')
            this.handleSubmit(event)
        }
    }

    handleSubmit(e) {

        answerTab[this.state.question].part1 = this.state.reponse[this.state.question].part1
        answerTab[this.state.question].part2 = this.state.reponse[this.state.question].part2
        answerTab[this.state.question].repu = this.state.answer
        answerTab[this.state.question].rept = this.state.reponse[this.state.question].rept

        

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
                    CallTextToSpeech(this.state.part1 +'......'+ this.state.part2)
                    this.setState({question: this.state.question+1, 
                    answer: ''}, ()=>{
                        console.log(this.state.question)
                    })
                }
            )  
        }
        else {
            answerTab.niv = this.state.niv
            this.toggle()
            const tab = JSON.stringify(answerTab)
            console.log(tab)
                axios("https://pfepam.azurewebsites.net/exo1/scoring",
                {method: 'POST', data: tab, header: {"Content-Type": "application/json"}})
                .then(res => {
                    res.data.exo = "Texte à trou"
                    res.data.exo_id = 1
                    res.data.level = this.state.niv
                    const finaltab = JSON.stringify(res.data)
                    sessionStorage.setItem("resultat", finaltab)
                    window.location = '/result/'+ this.state.user_id         
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

    componentDidMount(){
        const { user_id } = this.props.match.params
        getLevel(user_id, this.state.exo).then(response => {
        niveau.niv = response.data.level
        this.setState({niv: niveau.niv}, () => {
            axios("https://pfepam.azurewebsites.net/exo1",
                    {method: 'POST', data:niveau, header: {"Content-Type": "application/json"}})
            .then(res => {
                console.log(res.data)
                this.setState({reponse: res.data,
                    user_id: user_id,
                    part1: res.data[this.state.question].part1,
                    part2: res.data[this.state.question].part2,
                    rep1: res.data[this.state.question].rep1,
                    rep2: res.data[this.state.question].rep2,
                    rep3: res.data[this.state.question].rep3,
                    rep4: res.data[this.state.question].rep4}, () => {
                    CallTextToSpeech(this.state.part1 + '......' + this.state.part2)})
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
        <Col sm={{size: 10}}>
            <Row>
                <Col sm="6"><h3 className="titlePAM">Texte à trous</h3></Col>            
                <Col sm="6"><h6 className="exNumber titlePAM">Niveau {this.state.niv} - Exercice {this.state.question+1}/5</h6></Col>
            </Row>
            <Row>
                <Col sm={{size: 7, offset:4}}>
                <h5 className="sous-titre" style={{textAlign: "center"}}>Quel est le mot manquant de cette phrase ?</h5>
                </Col>
            </Row>         
        </Col>
        <Col sm={{size: 1, offset:1}}><img src={game} alt="jeu" className="txtATrouLogo"/></Col>
        </Row>
        <br/><br/>
        <Form onSubmit={this.handleSubmit}>
        <div id="phrase">
            <FormGroup row>
                <Col sm={{size: 6, offset:3}}>
                <h2>{this.state.part1}
                <Input onKeyPress={this.handleKeySubmit}
                type="text" name="answer" id="trou" 
                value={this.state.answer} placeholder="________________" 
                onChange={this.handleChange} disabled={!this.isLastLevel()} required={!this.isLastLevel()}/>
                {this.state.part2}</h2>
                </Col>
            </FormGroup>
        </div>
        <br/>
        <div id="niv1et2" style={{display: this.isLastLevel() ? "none": "block"}} className="solutions">
            <Row>
                <Col sm={{size:3, offset:4}}>
                    <Label check className="jeuSol" >
                    <Input onKeyPress={this.handleKeySubmit} type="radio" className="radio-btn" checked={this.state.answer === this.state.rep1} value={this.state.rep1} onChange={this.handleChange} required={this.isLastLevel()}/>{this.state.rep1}
                    <span className="checkmark"></span></Label>
                </Col>
                <Col sm={{size:3}}>
                <Label check className="jeuSol" >
                    <Input onKeyPress={this.handleKeySubmit} type="radio" className="radio-btn" checked={this.state.answer === this.state.rep2} value={this.state.rep2} onChange={this.handleChange}/>{this.state.rep2}
                    <span className="checkmark"></span></Label>
                </Col>
            </Row>
            <Row>
                <Col sm={{size:3, offset:4}}>
                    <Label check className="jeuSol" >
                    <Input onKeyPress={this.handleKeySubmit} type="radio" className="radio-btn" checked={this.state.answer === this.state.rep3} value={this.state.rep3} onChange={this.handleChange}/>{this.state.rep3}
                    <span className="checkmark"></span></Label>
                </Col>
                <Col sm={{size:3}}>
                <Label check className="jeuSol" >
                    <Input onKeyPress={this.handleKeySubmit} type="radio" className="radio-btn" checked={this.state.answer === this.state.rep4} value={this.state.rep4} onChange={this.handleChange}/>{this.state.rep4}
                    <span className="checkmark"></span></Label>
                </Col>
            </Row>
        </div>
        <Row>
            <Col sm={{size: 4}}><Button type="submit" className="footerRight">Valider</Button></Col>
        </Row>
        </Form>
        <Button className="footerLeft"><a href={this.goBackTo()}>Quitter</a></Button>


        <Modal isOpen={this.state.modal} toggle={this.toggle} backdrop="static">
          <ModalBody>
            Nous calculons votre score ! Veuillez attendre quelques instants...
          </ModalBody>
        </Modal>

      </Container>
    );
  }
}

export default TxtATrou;



        // if(this.state.answer === this.state.rep1){
        //     answerTab[this.state.question].repo1 = this.state.rep2
        //     answerTab[this.state.question].repo2 = this.state.rep3
        //     answerTab[this.state.question].repo3 = this.state.rep4
        //     console.log(answerTab)
        // }
        // else if(this.state.answer === this.state.rep2){
        //     answerTab[this.state.question].repo1 = this.state.rep1
        //     answerTab[this.state.question].repo2 = this.state.rep3
        //     answerTab[this.state.question].repo3 = this.state.rep4
        //     console.log(answerTab)
        // }
        // else if(this.state.answer === this.state.rep3){
        //     answerTab[this.state.question].repo1 = this.state.rep1
        //     answerTab[this.state.question].repo2 = this.state.rep2
        //     answerTab[this.state.question].repo3 = this.state.rep4
        //     console.log(answerTab)
        // }
        // else if(this.state.answer === this.state.rep4){
        //     answerTab[this.state.question].repo1 = this.state.rep1
        //     answerTab[this.state.question].repo2 = this.state.rep2
        //     answerTab[this.state.question].repo3 = this.state.rep3
        //     console.log(answerTab)
        // }
        // else {
        //     answerTab[this.state.question].repo1 = this.state.rep1
        //     answerTab[this.state.question].repo2 = this.state.rep2
        //     answerTab[this.state.question].repo3 = this.state.rep3
        //     console.log(answerTab)   
        // }