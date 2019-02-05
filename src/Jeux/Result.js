import React, { Component } from 'react';
import { Container, Row, Col, Button, Table} from 'reactstrap';
import jwt_decode from 'jwt-decode'
import './Result.css'
import trophy from '../Images/trophy.png'
import {saveScore} from '../utils/API'

var score = [];

class Result extends Component {
    constructor(props){
        super(props);
        this.state = {id:'', question:0, reponse:'', result:null, title:""}

        this.createResult = this.createResult.bind(this)
        this.createQuestion = this.createQuestion.bind(this)
        this.createResponse = this.createResponse.bind(this)
    }


    componentDidMount(){
        const { user_id } = this.props.match.params
        //Récupère résultats de la partie
        const resultat = sessionStorage.getItem("resultat") 
        //const ex = sessionStorage.getItem("exercice") 
        //sessionStorage.clear("resultat")
        if(resultat){
        
        var scoreTotal = 0
        const veryfinal = JSON.parse(resultat) //traduit en tableau json
        this.setState({id: veryfinal.exo_id, title: veryfinal.exo, reponse: veryfinal})  //set le titre de l'exo
        //Calcul du score final
        var length = Object.keys(veryfinal).length
        
        for(var i = 0; i < length-3; i++){
          scoreTotal += veryfinal[i].score
          score.push(veryfinal[i].score) 
          if(i===length-4){
              this.setState({result: scoreTotal})
              const newscore = {
                  user_id: user_id,
                  exo_id: veryfinal.exo_id,
                  value: scoreTotal,
                  created: new Date(),
                  level: veryfinal.level
              }
              saveScore(newscore)
            }
        }
      }
    }

    createQuestion(title, i){
        if (title === "Texte à trou") {
        //return [<h4>Phrase à trou {i}</h4>];
        return [<h5>{this.state.reponse[i].part1} ______ {this.state.reponse[i].part2}</h5>]
        }
        else if (title === "Jeu d'image") {
        //return [<h4>Image {i}</h4>];
        return [<img height="100" width="100" alt="" style={{objectFit:"cover"}} src={require(`./../Images/${this.state.reponse[i].src}`)}></img>]
        }
        else if (title === "La bonne image") {
        //    return [<h4>Label {i}</h4>];
        return [<h3>{this.state.reponse[i].label}</h3>]
        }
    }

    createResponse(title, i){
        console.log(title)
        if (title === "Texte à trou") {
        //vert //rouge //orange
        return [<h3  style={{color: this.state.reponse[i].score === 100 ? "#267326": this.state.reponse[i].score === 0 ? "#cc3300":"#EB7842"}}>{this.state.reponse[i].repu}</h3>]
        }
        else if (title === "Jeu d'image") {
        //vert //rouge //orange
        return [<h3  style={{color: this.state.reponse[i].score === 50 ? "#267326": this.state.reponse[i].score === 0 ? "#cc3300":"#EB7842"}}>{this.state.reponse[i].repU}</h3>]
        }
        else if (title === "La bonne image") {
        return [<img height="100" width="100" alt="" style={{objectFit:"cover", boxShadow: this.state.reponse[i].score === 100 ? "2px 2px 2px 2px #267326" : "2px 2px 2px 2px #cc3300"}} src={require(`./../Images/${this.state.reponse[i].repU}`)}></img>]
        }
    }

    createResult(title, i){
        if (title === "Texte à trou") {
        //return [<h4>Réponse à donner</h4>];
        return [<h3>{this.state.reponse[i].rept}</h3>]
        }
        else if (title === "Jeu d'image") {
        //return [<h4>Réponse à donner</h4>];
        return [<h3>{this.state.reponse[i].repT}</h3>]
        }
        else if (title === "La bonne image") {
        //return [<h4>Image à donner</h4>];
        return [<img height="100" width="100" alt="" style={{objectFit:"cover"}} src={require(`./../Images/${this.state.reponse[i].repT}`)}></img>]
        }
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

        const final = (this.state.result) ? this.state.result : '0'
        //display: this.isLastLevel() ? "none": "block"

        var indents = [];

        for (var i = 0; i < score.length; i++) { //-1 car une ligne pr le titre de l'exo
        // indents.push(<Row key={i}>
        //     <h3>Exercice {i+1} : {this.state.reponse[i].score}/100</h3></Row>);
        // indents.push(<Row key={i}>
        //     {this.createQuestion(this.state.title, i)}</Row>);
        // indents.push(<Row key={i}>
        //     {this.createResponse(this.state.title, i)}</Row>);
        // indents.push(<Row key={i}>
        //     {this.createResult(this.state.title, i)}</Row>);
        // indents.push(<br/>);

        indents.push(
        <tr>
            <th style={{verticalAlign:"middle"}} scope="row"><h4 className="titlePAM">{i+1}.</h4></th>
            <td style={{verticalAlign:"middle"}}>{this.createQuestion(this.state.title, i)}</td>
            <td style={{verticalAlign:"middle"}}>{this.createResult(this.state.title, i)}</td>
            <td style={{verticalAlign:"middle"}}>{this.createResponse(this.state.title, i)}</td>
            <td style={{verticalAlign:"middle"}}><h4>{this.state.reponse[i].score}</h4></td>
        </tr>);
        }

        console.log(indents)


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
                <Col sm={{size: 1}}><Button className ="smallButton"><a href={this.goBackTo()}><h2><i className="fa fa-arrow-left"></i></h2></a></Button></Col>
                <Col sm={{size: 1}}><Button className ="smallButton"><h2><i className="fa fa-power-off"></i></h2></Button></Col>
                </Row>
                <Row>
                    <Col sm={{size:10, offset:1}}>
                    <Table borderless>
                    <thead>
                    <tr>
                        <th><h4>Question</h4></th>
                        <th><h4>Consigne</h4></th>
                        <th><h4>La bonne réponse</h4></th>
                        <th><h4>Votre réponse</h4></th>
                        <th><h4>Score</h4></th>
                    </tr>
                    </thead>
                    <tbody>
                    {indents}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><h4 className="titlePAM">Total :</h4></td>
                        <td><h2 className="titlePAM">{final}/500</h2></td>
                    </tr>
                    </tbody>
                    </Table>
                    <br/>
                    </Col>
                </Row>
                {/* <Row>
                    <h2 className="titlePAM">Total : {final}</h2>
                </Row> */}
                    
            </Container>
        );
    }
}

export default Result;
