import React, { Component } from 'react';
import { Container, Row, Col, Button, FormGroup, Input, Label} from 'reactstrap';
import './BonneImage.css'
import game from '../Images/dice.png'
import axios from 'axios';

var answerTab = {"niv": null, 
                "0":{src:"",label:""},"1":{src:"",label:""},"2":{src:"",label:""},
                "3":{src:"",label:""},"4":{src:"",label:""}}

var niveau = {"niv": null}
//Niv 1 = 5 mots très différents
//Niv 2 = 5 mots similaires
//Niv 3 = 1 input à remplir

class BonneImage extends Component {

    constructor(props){
        super(props);
        this.state = {question:0, niv: 2,
            label:'',
            src_1:'images/0.png', src_2:'images/0.png', src_3:'images/0.png', src_4:'images/0.png',
            reponse:'', answer:''}

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.isLastLevel = this.isLastLevel.bind(this)
    }

    handleSubmit() {
        if(this.state.question<4)
        {
            answerTab[this.state.question].src = this.state.answer
            answerTab[this.state.question].label = this.state.reponse[this.state.question].label
            
            this.setState({
                label: this.state.reponse[this.state.question+1].label,
                src_1: this.state.reponse[this.state.question+1].src_1,
                src_2: this.state.reponse[this.state.question+1].src_2,
                src_3: this.state.reponse[this.state.question+1].src_3,
                src_4: this.state.reponse[this.state.question+1].src_4
            }, ()=>{
                    this.setState({question: this.state.question+1,
                    answer: ''}, ()=>{
                        console.log(this.state.question)
                    })
                }    
            )       
        }
        else {
            answerTab[this.state.question].label = this.state.reponse[this.state.question].label
            answerTab[this.state.question].src = this.state.answer
            answerTab.niv = this.state.niv

            const tab = JSON.stringify(answerTab)
            console.log(tab)
                axios("https://pfepam.azurewebsites.net/exo3/scoring",
                {method: 'POST', data: tab, header: {"Content-Type": "application/json"}})
               .then(res => {
                   console.log(res.data)
                   const finaltab = JSON.stringify(res.data)
                   localStorage.setItem("resultat", finaltab)
                   console.log("item créé")  
                   console.log(finaltab)   
                   console.log(localStorage.getItem("resultat"))             
                })
                //.then(window.location = '/user/result')    
        }
        console.log(JSON.stringify(answerTab))
    }

    handleChange(event) {
        this.setState({ answer: event.target.value })
    }

    isLastLevel() {
        if (this.state.niv === 2) {
            var lvl = true
        } else 
        {
            lvl = false
        }
        return lvl
    }
    
    componentDidMount() {
        niveau.niv = this.state.niv
        axios("https://pfepam.azurewebsites.net/exo3",
                {method: 'POST', data: niveau, header: {"Content-Type": "application/json"}})
        .then(res => {
            console.log(res.data)
            this.setState({ reponse: res.data,
            label: res.data[this.state.question].label,
            src_1: res.data[this.state.question].src_1,
            src_2: res.data[this.state.question].src_2,
            src_3: res.data[this.state.question].src_3,
            src_4: res.data[this.state.question].src_4 })
            })  
    }

  render() {
    

    return (
      <Container>
      <br/>
        <Row>
        <Col sm="10">
            <Row>
                <Col sm={{size: 6}}><h3 className="titlePAM">La bonne image</h3></Col>
                <Col sm={{size: 6}}><h6 className="exNumber titlePAM">Exercice {this.state.question+1}/5</h6></Col>
            </Row>
            <Row><h5 className="sous-titre" style={{marginBottom: "0px"}}>A quel image correspond ce mot ?</h5></Row>
        </Col>
        <Col sm={{size: 1, offset:1}}><img src={game} alt="jeu" className="jeuImageLogo"/></Col>
        </Row>
        <FormGroup check><br/><br/><br/>
            <Row>
                <Col sm="3">
                    <Label check className="jeuSol" >
                    <Input type="radio" className="radio-btn" checked={this.state.answer === this.state.src_1} value={this.state.src_1} onChange={this.handleChange}/>
                    <img height="150" width="150" alt="" src={require(`./../Images/${this.state.src_1}`)} className="imgExo"></img>
                    </Label>
                </Col>
                <Col sm="3">
                    <Label check className="jeuSol" >
                    <Input type="radio" className="radio-btn" checked={this.state.answer === this.state.src_2} value={this.state.src_2} onChange={this.handleChange}/>
                    <img height="150" width="150" alt="" src={require(`./../Images/${this.state.src_2}`)} className="imgExo"></img>
                    </Label>
                </Col>
                <Col sm="3">
                    <Label check className="jeuSol" >
                    <Input type="radio" className="radio-btn" checked={this.state.answer === this.state.src_3} value={this.state.src_3} onChange={this.handleChange}/>
                    <img height="150" width="150" alt="" src={require(`./../Images/${this.state.src_3}`)} className="imgExo"></img>
                    </Label>
                </Col>
                <Col sm="3">
                    <Label check className="jeuSol" >
                    <Input type="radio" className="radio-btn" checked={this.state.answer === this.state.src_4} value={this.state.src_4} onChange={this.handleChange}/>
                    <img height="150" width="150" alt="" src={require(`./../Images/${this.state.src_4}`)} className="imgExo"></img>
                    </Label>
                </Col>
            </Row>
            <br/><br/>
            <Row>
                <Col><h2 style={{textAlign:"center"}} className="titlePAM">{this.state.label}</h2></Col>
            </Row>


            {/* <Col sm={{size: 2, offset:3}}>
                <h2>{this.state.label}</h2>
            </Col>
            <Col sm={{size: 4, offset:1}} className="solutions" >
                <Row>
                    <Col sm="6">
                        <Label check className="jeuSol" >
                        <Input type="radio" className="radio-btn" checked={this.state.answer === this.state.src_1} value={this.state.src_1} onChange={this.handleChange}/>
                        <img height="150" width="150" alt="" src={require(`./../Images/${this.state.src_1}`)} className="imgExo"></img>
                        </Label>
                    </Col>
                    <Col sm="6">
                        <Label check className="jeuSol" >
                        <Input type="radio" className="radio-btn" checked={this.state.answer === this.state.src_2} value={this.state.src_2} onChange={this.handleChange}/>
                        <img height="150" width="150" alt="" src={require(`./../Images/${this.state.src_2}`)} className="imgExo"></img>
                        </Label>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                        <Label check className="jeuSol" >
                        <Input type="radio" className="radio-btn" checked={this.state.answer === this.state.src_3} value={this.state.src_3} onChange={this.handleChange}/>
                        <img height="150" width="150" alt="" src={require(`./../Images/${this.state.src_3}`)} className="imgExo"></img>
                        </Label>
                    </Col>
                    <Col sm="6">
                        <Label check className="jeuSol" >
                        <Input type="radio" className="radio-btn" checked={this.state.answer === this.state.src_4} value={this.state.src_4} onChange={this.handleChange}/>
                        <img height="150" width="150" alt="" src={require(`./../Images/${this.state.src_4}`)} className="imgExo"></img>
                        </Label>
                    </Col>
                </Row>
            </Col>
        </Row> */}
        </FormGroup>
        <Row>
            <Col sm={{size: 4}}><Button className="footerLeft"><a href="/user">Quitter</a></Button></Col>
            <Col sm={{size: 4}}><Button onClick={this.handleSubmit} className="footerRight">Valider</Button></Col>
        </Row>
        
      </Container>
    );
  }
}

export default BonneImage;
