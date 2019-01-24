import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'reactstrap';
import './Result.css'
import trophy from '../Images/trophy.png'

var score = [];

class Result extends Component {
    constructor(props){
        super(props);
        this.state = {question:0, reponse:'', result:null, title:""}

        this.createResult = this.createResult.bind(this)
        this.createQuestion = this.createQuestion.bind(this)
        this.createResponse = this.createResponse.bind(this)
    }

    componentDidMount(){
        //Récupère résultats de la partie
        const resultat = localStorage.getItem("resultat") 
        //localStorage.clear("resultat")
        if(resultat){
        var scoreTotal = 0
        const veryfinal = JSON.parse(resultat) //traduit en tableau json
        this.setState({title: veryfinal.exo, reponse: veryfinal})  //set le titre de l'exo
        //Calcul du score final
        var length = Object.keys(veryfinal).length
        for(var i = 0; i < length-1; i++){
          scoreTotal += veryfinal[i].score
          score.push(veryfinal[i].score) 
          if(i===length-2){this.setState({result: scoreTotal})}
        }
      }
    }

    createQuestion(title, i){
        if (title === "Texte à trou") {
        return [<h4>Phrase à trou {i}</h4>];
        //return [<h4>{this.state.reponse[i].part1} ______ {this.state.reponse[i].part2}</h4>]
        }
        else if (title === "Jeu d'image") {
        return [<h4>Image {i}</h4>];
        //return [<img height="50" width="50" alt="" src={require(`./../Images/${this.state.reponse[i].src}`)} className="imgExo"></img>]
        }
        else if (title === "La bonne image") {
            return [<h4>Label {i}</h4>];
        //return [<h4>{this.state.reponse[i].label}</h4>]
        }
    }

    createResponse(title, i){
        if (title === "Texte à trou") {
        return [<h4>Réponse user</h4>];
        //return [<h4>{this.state.reponse[i].repU}</h4>]
        }
        else if (title === "Jeu d'image") {
        return [<h4>Réponse user</h4>];
        //return [<h4>{this.state.reponse[i].repU}</h4>]
        }
        else if (title === "La bonne image") {
            return [<h4>Image user</h4>];
        //return [<img height="50" width="50" alt="" src={require(`./../Images/${this.state.reponse[i].repU}`)} className="imgExo"></img>]
        }
    }

    createResult(title, i){
        if (title === "Texte à trou") {
        return [<h4>Réponse à donner</h4>];
        //return [<h4>{this.state.reponse[i].repT}</h4>]
        }
        else if (title === "Jeu d'image") {
        return [<h4>Réponse à donner</h4>];
        //return [<h4>{this.state.reponse[i].repT}</h4>]
        }
        else if (title === "La bonne image") {
        return [<h4>Image à donner</h4>];
        //return [<img height="50" width="50" alt="" src={require(`./../Images/${this.state.reponse[i].repT}`)} className="imgExo"></img>]
        }
    }

    render() {

        const final = (this.state.result) ? this.state.result : 'Nope'
        //display: this.isLastLevel() ? "none": "block"

        var indents = [];

        for (var i = 0; i < score.length; i++) { //-1 car une ligne pr le titre de l'exo
        indents.push(<Row key={i}>
            <h3>Exercice {i+1} : {this.state.reponse[i].score}/100</h3></Row>);
        indents.push(<Row key={i}>
            {this.createQuestion(this.state.title, i)}</Row>);
        indents.push(<Row key={i}>
            {this.createResponse(this.state.title, i)}</Row>);
        indents.push(<Row key={i}>
            {this.createResult(this.state.title, i)}</Row>);
        indents.push(<br/>);
        }

        return (
            <Container>
                <br/>
                <Row>
                <Col sm={{size: 5}}>
                    <Row>
                        <h3 className="titlePAM">Félicitations !</h3>           
                    </Row>
                    <Row><h6 id="sous-titre">Voici vos résultats : {this.state.title} </h6></Row>            
                </Col>
                <Col sm="5"><h6 className="titlePAM"><img src={trophy} alt="" style={{height:"150px"}}></img></h6></Col>
                <Col sm={{size: 1}}><Button className ="smallButton"><a href="/user"><h2><i className="fa fa-arrow-left"></i></h2></a></Button></Col>
                <Col sm={{size: 1}}><Button className ="smallButton"><h2><i className="fa fa-power-off"></i></h2></Button></Col>
                </Row>
                <Row>
                    <Col sm={{size:8, offset:1}}>
                    {indents}
                    <br/>
                    </Col>
                    <Col sm="3">
                        <br/><br/><br/>
                    <Row>
                        <h2 className="titlePAM">Total : {final}</h2></Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Result;
