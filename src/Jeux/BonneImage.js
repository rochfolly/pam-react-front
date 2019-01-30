import React, { Component } from 'react';
import { Container, Row, Col, Button, 
    FormGroup, Input, Label} from 'reactstrap';
import './BonneImage.css'
import game from '../Images/bneImg.png'
import jwt_decode from 'jwt-decode'
import axios from 'axios';

var answerTab = {"niv": null, id:'',
                "0":{src:"",label:""},"1":{src:"",label:""},"2":{src:"",label:""},
                "3":{src:"",label:""},"4":{src:"",label:""}}

var niveau = {"niv": null}
//Niv 1 = choix entre 2 images
//Niv 2 = choix entre 4 images

class BonneImage extends Component {

    constructor(props){
        super(props);
        this.state = {question:0, niv: 1,
            label:'',
            src_1:'images/0.png', src_2:'images/0.png', src_3:'images/0.png', src_4:'images/0.png',
            reponse:'', answer:''}

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleKeySubmit = this.handleKeySubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.isFirstLevel = this.isFirstLevel.bind(this)
    }

    handleKeySubmit(event) {
        if(event.key == 'Enter'){
            //alert('enter press here! ')
            this.handleSubmit()
        }
    }

    handleSubmit() {
        if(this.state.question<4)
        {
            answerTab[this.state.question].src = this.state.answer
            answerTab[this.state.question].label = this.state.reponse[this.state.question].label
            
            if(this.state.niv === 1){
                this.setState({
                    label: this.state.reponse[this.state.question+1].label,
                    src_1: this.state.reponse[this.state.question+1].src_1,
                    src_2: this.state.reponse[this.state.question+1].src_2
                }, ()=>{
                        this.setState({question: this.state.question+1,
                        answer: ''}, ()=>{
                            console.log(this.state.question)
                        })
                    }    
                ) 
            }
            else {
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
                   res.data.exo = "La bonne image"
                   res.data.exo_id = 3
                   res.data.level = this.state.niv
                   const finaltab = JSON.stringify(res.data)
                   sessionStorage.setItem("resultat", finaltab)            
                   window.location = '/result/'+this.state.id
                })
        }
        console.log(JSON.stringify(answerTab))
    }

    handleChange(event) {
        this.setState({ answer: event.target.value })
    }

    isFirstLevel() {
        if (this.state.niv === 1) {
            var lvl = true
        } else 
        {
            lvl = false
        }
        return lvl
    }
    
    componentDidMount() {
        const {user_id} = this.props.match.params
        niveau.niv = this.state.niv
        axios("https://pfepam.azurewebsites.net/exo3",
                {method: 'POST', data: niveau, header: {"Content-Type": "application/json"}})
        .then(res => {
            console.log(res.data)
            if(this.state.niv === 1){
                this.setState({ reponse: res.data,
                    id: user_id,
                    label: res.data[this.state.question].label,
                    src_1: res.data[this.state.question].src_1,
                    src_2: res.data[this.state.question].src_2})
            } else {
                this.setState({ reponse: res.data,
                    label: res.data[this.state.question].label,
                    src_1: res.data[this.state.question].src_1,
                    src_2: res.data[this.state.question].src_2,
                    src_3: res.data[this.state.question].src_3,
                    src_4: res.data[this.state.question].src_4 })
            }
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
                <Col sm={{size: 6}}><h3 className="titlePAM">La bonne image</h3></Col>
                <Col sm={{size: 6}}><h6 className="exNumber titlePAM">Niveau {this.state.niv} - Exercice {this.state.question+1}/5</h6></Col>
            </Row>
            <Row>
                <Col sm={{size: 5, offset:5}}>
                <h5 className="sous-titre" style={{marginBottom: "0px", textAlign: "center"}}>A quel image correspond ce mot ?</h5>
                </Col>
            </Row>
        </Col>
        <Col sm={{size: 1, offset:1}}><img src={game} alt="jeu" className="jeuImageLogo"/></Col>
        </Row>
        <FormGroup check>
        <div style={{display: this.isFirstLevel() ? "none": "block"}}>
        <br/>
            <Row>
                <Col sm="3">
                    <Label check className="jeuSol" >
                    <Input onKeyPress={this.handleKeySubmit} type="radio" className="radio-btn" checked={this.state.answer === this.state.src_1} value={this.state.src_1} onChange={this.handleChange}/>
                    <img height="200" width="200" alt="" src={require(`./../Images/${this.state.src_1}`)} className="imgExo"></img>
                    </Label>
                </Col>
                <Col sm="3">
                    <Label check className="jeuSol" >
                    <Input onKeyPress={this.handleKeySubmit} type="radio" className="radio-btn" checked={this.state.answer === this.state.src_2} value={this.state.src_2} onChange={this.handleChange}/>
                    <img height="200" width="200" alt="" src={require(`./../Images/${this.state.src_2}`)} className="imgExo"></img>
                    </Label>
                </Col>
                <Col sm="3">
                    <Label check className="jeuSol" >
                    <Input onKeyPress={this.handleKeySubmit} type="radio" className="radio-btn" checked={this.state.answer === this.state.src_3} value={this.state.src_3} onChange={this.handleChange}/>
                    <img height="200" width="200" alt="" src={require(`./../Images/${this.state.src_3}`)} className="imgExo"></img>
                    </Label>
                </Col>
                <Col sm="3">
                    <Label check className="jeuSol" >
                    <Input onKeyPress={this.handleKeySubmit} type="radio" className="radio-btn" checked={this.state.answer === this.state.src_4} value={this.state.src_4} onChange={this.handleChange}/>
                    <img height="200" width="200" alt="" src={require(`./../Images/${this.state.src_4}`)} className="imgExo"></img>
                    </Label>
                </Col>
            </Row>
        </div>
        <div style={{display: this.isFirstLevel() ? "block": "none"}}>
            <Row>
                <Col sm={{size:4, offset:2}}>
                    <Label check className="jeuSol" >
                    <Input onKeyPress={this.handleKeySubmit}  type="radio" className="radio-btn" checked={this.state.answer === this.state.src_1} value={this.state.src_1} onChange={this.handleChange}/>
                    <img height="250" width="250" alt="" src={require(`./../Images/${this.state.src_1}`)} className="imgExo"></img>
                    </Label>
                </Col>
                <Col sm="4">
                    <Label check className="jeuSol" >
                    <Input onKeyPress={this.handleKeySubmit} type="radio" className="radio-btn" checked={this.state.answer === this.state.src_2} value={this.state.src_2} onChange={this.handleChange}/>
                    <img height="250" width="250" alt="" src={require(`./../Images/${this.state.src_2}`)} className="imgExo"></img>
                    </Label>
                </Col>
            </Row>
        </div>
            <br/><br/>
            <Row>
                <Col><h2 style={{textAlign:"center"}} className="titlePAM">{this.state.label}</h2></Col>
            </Row>
        </FormGroup>
        <Row>
            <Col sm={{size: 4}}><Button className="footerLeft"><a href={this.goBackTo()}>Quitter</a></Button></Col>
            <Col sm={{size: 4}}><Button onClick={this.handleSubmit} className="footerRight">Valider</Button></Col>
        </Row>
        
      </Container>
    );
  }
}

export default BonneImage;
