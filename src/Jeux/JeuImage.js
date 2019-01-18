import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'reactstrap';
import './JeuImage.css'
import game from '../Images/dice.png'
import axios from 'axios';
import styled from 'styled-components';

class ColImg extends Component {
    constructor(props){
        super(props);
     
    }

    render(){
        const urlImg = "file:///"+__dirname+"../Images/images/1.jpg"
        const ColImage = styled(Col) `background-image: url(${urlImg})`
        console.log(__dirname)
      return(
        <ColImage sm={{size: 3, offset:3}} className="jeuImg"></ColImage>
        
      );}
}


class JeuImage extends Component {

    constructor(props){
        super(props);
        this.state = {question:0, lien:'', word1:''}
    }
    
    componentDidMount(){
        const images=["img_1","img_2","img_3","img_4","img_5"
            ,"img_6","img_7","img_8","img_9","img_10"]
        const gameurl = "http://192.168.43.68/exo2"
        axios.post(gameurl)
        .then(res => {
            console.log(res.data[images[this.state.question]][0].src)
            console.log(res.data[images[this.state.question]][1])
            this.setState({ lien: res.data[images[this.state.question]][0].src,
                 word1: res.data[images[this.state.question]][1].word_1 })
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
                <Col sm={{size: 6}}><h6 className="exNumber titlePAM">Exercice 1/10</h6></Col>
            </Row>
            <Row><h5 className="sous-titre">A quel mot correspond cette image ?</h5></Row>
        </Col>
        <Col sm={{size: 1, offset:1}}><img src={game} alt="jeu" className="jeuImageLogo"/></Col>
        </Row>
        <Row>
            <ColImg sm={{size: 3, offset:3}} lien={'../Images/images/1.jpg'} className="jeuImg" ref="bordel">
            </ColImg>
            <Col sm={{size: 3, offset:1}}>
                <Row><Button className="jeuSol" id="jeuSol1">{this.state.word1}</Button></Row>
                <Row><Button className="jeuSol" id="jeuSol2">Tigre</Button></Row>
                <Row><Button className="jeuSol" id="jeuSol3">Glace</Button></Row>
                <Row><Button className="jeuSol" id="jeuSol4">Poisson</Button></Row>
                <Row><Button className="jeuSol" id="jeuSol5">Guacamole</Button></Row>
            </Col>
        </Row>
        <Row>
            <Col sm={{size: 4}}><Button className="footerLeft"><a href="/user">Quitter</a></Button></Col>
            <Col sm={{size: 4}}><Button className="footerRight">Valider</Button></Col>
        </Row>
        
      </Container>
    );
  }
}

export default JeuImage;
