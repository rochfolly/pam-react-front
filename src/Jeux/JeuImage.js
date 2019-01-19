import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'reactstrap';
import './JeuImage.css'
import game from '../Images/dice.png'
import axios from 'axios';

const images=["img_1","img_2","img_3","img_4","img_5"
            ,"img_6","img_7","img_8","img_9","img_10"]

class JeuImage extends Component {

    constructor(props){
        super(props);
        this.state = {question:1, 
            lien:'images/0.png',
            word1:'', word2:'', word3:'', word4:'', word5:'',
            reponse:''}

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        const images=["","img_1","img_2","img_3","img_4","img_5"
            ,"img_6","img_7","img_8","img_9","img_10"]
        // this.setState({question: this.state.question+1})
        // console.log(this.state.question)
        this.setState({
            lien: this.state.reponse[images[this.state.question+1]][0].src,
            word1: this.state.reponse[images[this.state.question+1]][1].word_1,
            word2: this.state.reponse[images[this.state.question+1]][1].word_2,
            word3: this.state.reponse[images[this.state.question+1]][1].word_3,
            word4: this.state.reponse[images[this.state.question+1]][1].word_4,
            word5: this.state.reponse[images[this.state.question+1]][1].word_5 
        })
        this.setState({question: this.state.question+1})

    }
    
    componentDidMount(){
        const images=["","img_1","img_2","img_3","img_4","img_5"
            ,"img_6","img_7","img_8","img_9","img_10"]
        const gameurl = "https://pampfe.azurewebsites.net/exo2"
        axios.post(gameurl)
        .then(res => {
            //console.log(res.data[images[this.state.question]][0].src)
            //console.log(res.data[images[this.state.question]][1])
            //console.log(res.data)
            this.setState({ reponse: res.data,
                lien: res.data[images[this.state.question]][0].src,
                 word1: res.data[images[this.state.question]][1].word_1,
                 word2: res.data[images[this.state.question]][1].word_2,
                 word3: res.data[images[this.state.question]][1].word_3,
                 word4: res.data[images[this.state.question]][1].word_4,
                 word5: res.data[images[this.state.question]][1].word_5, })
                 console.log(this.state.reponse) 
            })  
    }

    // updateRep(rep){
    //     this.setState({reponse: rep})
    // }

  render() {
    

    return (
      <Container>
      <br/>
        <Row>
        <Col sm="10">
            <Row>
                <Col sm={{size: 6}}><h3 className="titlePAM">Jeu d'image</h3></Col>
                <Col sm={{size: 6}}><h6 className="exNumber titlePAM">Exercice {this.state.question}/10</h6></Col>
            </Row>
            <Row><h5 className="sous-titre">A quel mot correspond cette image ?</h5></Row>
        </Col>
        <Col sm={{size: 1, offset:1}}><img src={game} alt="jeu" className="jeuImageLogo"/></Col>
        </Row>
        <Row>
            <Col sm={{size: 3, offset:3}} className="jeuImg">
                <img height="300" width="300" src={require(`./../Images/${this.state.lien}`)} className="imgExo"></img>
            </Col>
            <Col sm={{size: 3, offset:1}}>
                <Row><Button className="jeuSol" id="jeuSol1">{this.state.word1}</Button></Row>
                <Row><Button className="jeuSol" id="jeuSol2">{this.state.word2}</Button></Row>
                <Row><Button className="jeuSol" id="jeuSol3">{this.state.word3}</Button></Row>
                <Row><Button className="jeuSol" id="jeuSol4">{this.state.word4}</Button></Row>
                <Row><Button className="jeuSol" id="jeuSol5">{this.state.word5}</Button></Row>
            </Col>
        </Row>
        <Row>
            <Col sm={{size: 4}}><Button className="footerLeft"><a href="/user">Quitter</a></Button></Col>
            <Col sm={{size: 4}}><Button onClick={this.handleSubmit} className="footerRight">Valider</Button></Col>
        </Row>
        
      </Container>
    );
  }
}

export default JeuImage;
